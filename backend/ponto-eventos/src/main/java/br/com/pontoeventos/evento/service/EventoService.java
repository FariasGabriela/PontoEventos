package br.com.pontoeventos.evento.service;

import br.com.pontoeventos.evento.dto.EventoDTO;
import br.com.pontoeventos.evento.model.EventoModel;
import br.com.pontoeventos.evento.repository.*;
import br.com.pontoeventos.evento.converter.EventoConverter;
import br.com.pontoeventos.instituicao.dto.InstituicaoDTO;
import br.com.pontoeventos.instituicao.model.InstituicaoModel;
import br.com.pontoeventos.instituicao.repository.InstituicaoRepository;
import br.com.pontoeventos.instituicao.service.InstituicaoService;
import br.com.pontoeventos.utils.exception.NaoEncontradoException;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import java.util.List;

/**
 * Service de evento
 */
@RequestScoped
public class EventoService {

    /**
     * Repository
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
        EventoModel eventoModel = eventoConverter.dtoToModel(eventoDTO);
        eventoModel.setInstituicaoModel(buscaValidaInstituicao(eventoDTO.getInstituicao()));
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
        EventoModel eventoModel = eventoRepository.findById(eventoDTO.getId());

        if (eventoModel == null) {
            throw new NaoEncontradoException(eventoDTO.getId().toString());
        }

        eventoConverter.dtoToModel(eventoDTO, eventoModel);
        eventoModel.setInstituicaoModel(buscaValidaInstituicao(eventoDTO.getInstituicao()));
        eventoRepository.persist(eventoModel);

        return eventoDTO;
    }

    /**
     * Valida se a instituição existe e retorna
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
     * @param idInstituicao - id da institução
     * @return
     */
    public EventoModel findInstituicaoInEvento(Integer idInstituicao) {
        return eventoRepository.find("instituicaoModel.id", idInstituicao).firstResult();

    }

}
