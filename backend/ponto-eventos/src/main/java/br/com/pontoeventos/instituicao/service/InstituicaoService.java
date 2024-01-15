package br.com.pontoeventos.instituicao.service;

import br.com.pontoeventos.evento.model.EventoModel;
import br.com.pontoeventos.evento.service.EventoService;
import br.com.pontoeventos.instituicao.converter.InstituicaoConverter;
import br.com.pontoeventos.instituicao.dto.InstituicaoDTO;
import br.com.pontoeventos.instituicao.enumeration.InstituicaoTipoEnumeration;
import br.com.pontoeventos.instituicao.model.InstituicaoModel;
import br.com.pontoeventos.instituicao.repository.InstituicaoRepository;
import br.com.pontoeventos.utils.exception.NaoEncontradoException;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import java.util.List;

/**
 * Service de Instituição
 */
@RequestScoped
public class InstituicaoService {

    /**
     * Repository
     */
    @Inject
    InstituicaoRepository instituicaoRepository;

    /**
     * Converter
     */
    @Inject
    InstituicaoConverter instituicaoConverter;

    /**
     * service de evento
     */
    @Inject
    EventoService eventoService;

    /**
     * Busca a lista de todas as instituições
     *
     * @return - lista dto de instituições
     */
    public List<InstituicaoDTO> findAll() {
        List<InstituicaoModel> instituicaoModelList = instituicaoRepository.listAll();
        return instituicaoConverter.modelListToDtoList(instituicaoModelList);
    }

    /**
     * Busca uma instituições de acordo com o id
     *
     * @param id - id de instituições
     * @return dto de instituições
     */
    public InstituicaoDTO findById(Integer id) {
        InstituicaoModel instituicaoModel = instituicaoRepository.findById(id);

        if (instituicaoModel == null) {
            throw new NaoEncontradoException(id.toString());
        }

        return instituicaoConverter.modelToDto(instituicaoModel);
    }

    /**
     * cria um novo registro de instituições
     *
     * @param instituicaoDTO - dto de instituições
     * @return dto de instituições
     */
    @Transactional
    public InstituicaoDTO create(InstituicaoDTO instituicaoDTO) {
        validacaoTipo(instituicaoDTO.getTipo());

        InstituicaoModel instituicaoModel = instituicaoConverter.dtoToModel(instituicaoDTO);
        instituicaoRepository.persist(instituicaoModel);
        instituicaoDTO.setId(instituicaoModel.getId());

        return instituicaoDTO;
    }

    /**
     * edita um registro de instituições
     *
     * @param instituicaoDTO - dto de instituições
     * @return dto de instituições
     */
    @Transactional
    public InstituicaoDTO update(InstituicaoDTO instituicaoDTO) {
        validacaoTipo(instituicaoDTO.getTipo());

        InstituicaoModel instituicaoModel = instituicaoRepository.findById(instituicaoDTO.getId());

        if (instituicaoModel == null) {
            throw new NaoEncontradoException(instituicaoDTO.getId().toString());
        }

        instituicaoConverter.dtoToModel(instituicaoDTO, instituicaoModel);
        instituicaoRepository.persist(instituicaoModel);

        return instituicaoDTO;
    }

    /**
     * deleta uma instituição
     *
     * @param id - id que deve ser deletado
     */
    @Transactional
    public InstituicaoDTO delete(Integer id) {
        InstituicaoModel instituicaoModel = instituicaoRepository.findById(id);

        if (instituicaoModel == null) {
            throw new NaoEncontradoException(id.toString());
        }

        EventoModel eventoModel = eventoService.findInstituicaoInEvento(id);

        if (eventoModel != null) {
            throw new NaoEncontradoException("está sendo usado!");
        }

        instituicaoRepository.delete(instituicaoModel);

        return null;
    }

    /**
     * Valida se o tipo enviado na requisição é valido
     *
     * @param tipo - tipo
     * @return - descrição do tipo
     */
    private String validacaoTipo(String tipo) {
        try {
            return InstituicaoTipoEnumeration.valueOf(tipo).name();
        } catch (IllegalArgumentException e) {
            throw new NaoEncontradoException();
        }
    }
}
