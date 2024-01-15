package br.com.pontoeventos.evento.service;

import br.com.pontoeventos.evento.converter.EventoConverter;
import br.com.pontoeventos.evento.dto.EventoDTO;
import br.com.pontoeventos.evento.model.EventoModel;
import br.com.pontoeventos.evento.repository.EventoRepository;
import br.com.pontoeventos.instituicao.dto.InstituicaoDTO;
import br.com.pontoeventos.instituicao.model.InstituicaoModel;
import br.com.pontoeventos.instituicao.repository.InstituicaoRepository;
import br.com.pontoeventos.utils.exception.DataInvalidaException;
import br.com.pontoeventos.utils.exception.NaoEncontradoException;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.logging.Logger;

/**
 * Service de evento
 */
@RequestScoped
public class EventoService {

    Logger logger = Logger.getLogger(EventoService.class.getName());

    /**
     * Repository de evento
     */
    @Inject
    EventoRepository eventoRepository;

    /**
     * Converter
     */
    @Inject
    EventoConverter eventoConverter;

    /**
     * Repository de instituição
     */
    @Inject
    InstituicaoRepository instituicaoRepository;

    /**
     * Busca a lista de todos os eventos
     *
     * @return - lista dto de eventos
     */
    public List<EventoDTO> findAll() {
        List<EventoModel> eventoModelList = eventoRepository.listAll();
        return eventoConverter.modelListToDtoList(eventoModelList);
    }

    /**
     * Busca um evneto de acordo com o id
     *
     * @param id - id de evento
     * @return dto de evento
     */
    public EventoDTO findById(Integer id) {
        EventoModel eventoModel = eventoRepository.findById(id);

        if (eventoModel == null) {
            throw new NaoEncontradoException(id.toString());
        }

        return eventoConverter.modelToDto(eventoModel);
    }

    /**
     * cria um novo registro de evento
     *
     * @param eventoDTO - dto de evento
     * @return dto de evento
     */
    @Transactional
    public EventoDTO create(EventoDTO eventoDTO) {
        validacaoData(eventoDTO.getDataInicial(), eventoDTO.getDataFinal());

        EventoModel eventoModel = eventoConverter.dtoToModel(eventoDTO);
        eventoModel.setInstituicaoModel(buscaValidaInstituicao(eventoDTO.getInstituicao()));
        eventoModel.setAtivo(validacaoSituacao(eventoDTO.getDataInicial(), eventoDTO.getDataFinal()));
        eventoRepository.persist(eventoModel);
        eventoDTO.setId(eventoModel.getId());

        return eventoDTO;
    }

    /**
     * edita um registro de evento
     *
     * @param eventoDTO - dto de evento
     * @return dto de evento
     */
    @Transactional
    public EventoDTO update(EventoDTO eventoDTO) {
        validacaoData(eventoDTO.getDataInicial(), eventoDTO.getDataFinal());

        EventoModel eventoModel = eventoRepository.findById(eventoDTO.getId());

        if (eventoModel == null) {
            throw new NaoEncontradoException(eventoDTO.getId().toString());
        }

        eventoConverter.dtoToModel(eventoDTO, eventoModel);
        eventoModel.setInstituicaoModel(buscaValidaInstituicao(eventoDTO.getInstituicao()));
        eventoModel.setAtivo(validacaoSituacao(eventoDTO.getDataInicial(), eventoDTO.getDataFinal()));
        eventoRepository.persist(eventoModel);

        return eventoDTO;
    }

    /**
     * Valida se a instituição existe e retorna
     *
     * @param instituicaoDTO - dto de instituição
     * @return - model de instituição
     */
    private InstituicaoModel buscaValidaInstituicao(InstituicaoDTO instituicaoDTO) {
        InstituicaoModel instituicaoModel = instituicaoRepository.findById(instituicaoDTO.getId());

        if (instituicaoModel == null) {
            throw new NaoEncontradoException(instituicaoDTO.getId().toString());
        }

        return instituicaoModel;
    }

    /**
     * deleta uma evento
     *
     * @param id - id que deve ser deletado
     */
    @Transactional
    public EventoModel delete(Integer id) {
        EventoModel eventoModel = eventoRepository.findById(id);

        if (eventoModel == null) {
            throw new NaoEncontradoException(id.toString());
        }

        eventoRepository.delete(eventoModel);

        return null;
    }

    /**
     * Valida se a instituição está sendo usada em algum evento
     *
     * @param idInstituicao - id da institução
     * @return
     */
    public EventoModel findInstituicaoInEvento(Integer idInstituicao) {
        return eventoRepository.find("instituicaoModel.id", idInstituicao).firstResult();

    }

    /**
     * Valida se o periodo das datas sõa validas
     *
     * @param dataInicial - data inicial
     * @param dataFinal   - data final
     */
    private void validacaoData(LocalDate dataInicial, LocalDate dataFinal) {
        if (dataInicial.isAfter(dataFinal))
            throw new DataInvalidaException();
    }

    /**
     * Verifica se o evento é ativo
     *
     * @param dataInicial - data inicial
     * @param dataFinal   - data final
     * @return - ativo/inativo
     */
    private boolean validacaoSituacao(LocalDate dataInicial, LocalDate dataFinal) {
        boolean dataInicialValida = dataInicial.isBefore(LocalDate.now()) || dataInicial.isEqual(LocalDate.now());
        boolean dataFinalValida = dataFinal.isAfter(LocalDate.now()) || dataFinal.isEqual(LocalDate.now());

        return dataInicialValida && dataFinalValida;
    }

    /**
     * Valida a vigencia dos eventos
     */
    @Transactional
    public void validarVigenciaEventos() {
        ativarEventos();
        inativarEventos();
    }

    /**
     * Valida a vigencia dos eventos ativos
     */
    private void ativarEventos() {
        List<EventoModel> eventoModelList = eventoRepository
                .list("dataInicial <= CURRENT_DATE AND dataFinal >= CURRENT_DATE AND ativo = false");

        for (EventoModel eventoModel : eventoModelList) {
            eventoModel.setAtivo(true);
            eventoRepository.persist(eventoModel);

            loggerEventos(eventoModel);
            logger.info("ativado com sucesso!");
        }
    }

    /**
     * Valida a vigencia dos eventos inativos
     */
    private void inativarEventos() {
        List<EventoModel> eventoModelList = eventoRepository
                .list("(dataInicial > CURRENT_DATE OR dataFinal < CURRENT_DATE) AND ativo = true");

        eventoModelList.forEach(eventoModel -> {
            eventoModel.setAtivo(false);
            eventoRepository.persist(eventoModel);

            loggerEventos(eventoModel);
            logger.info("inativado com sucesso!");
        });
    }

    /**
     * Logs de ativação/inativação de evento
     *
     * @param eventoModel
     */
    private void loggerEventos(EventoModel eventoModel) {
        logger.info("-----EVENTOS-----");
        logger.info("Id:           " + eventoModel.getId() + "");
        logger.info("Data inicial: " + eventoModel.getDataInicial() + "");
        logger.info("Data final:   " + eventoModel.getDataFinal() + "");
    }

}
