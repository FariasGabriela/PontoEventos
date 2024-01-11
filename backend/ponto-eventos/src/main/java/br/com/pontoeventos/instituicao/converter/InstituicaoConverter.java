package br.com.pontoeventos.instituicao.converter;

import br.com.pontoeventos.instituicao.dto.InstituicaoDTO;
import br.com.pontoeventos.instituicao.model.InstituicaoModel;
import jakarta.enterprise.context.RequestScoped;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Converter de Instituição
 */
@RequestScoped
public class InstituicaoConverter {

    /**
     * Converte um objeto dto para um model
     *
     * @param instituicaoDTO   - dto de instituição
     * @param instituicaoModel - model de instituição
     * @return model de instituição
     */
    public InstituicaoModel dtoToModel(InstituicaoDTO instituicaoDTO, InstituicaoModel instituicaoModel) {
        instituicaoModel.setId(instituicaoDTO.getId());
        instituicaoModel.setName(instituicaoDTO.getName());
        instituicaoModel.setTipo(instituicaoDTO.getTipo());

        return instituicaoModel;
    }

    /**
     * Cria um novo model
     *
     * @param instituicaoDTO - dto de instituição
     * @return model de instituição
     */
    public InstituicaoModel dtoToModel(InstituicaoDTO instituicaoDTO) {
        return dtoToModel(instituicaoDTO, new InstituicaoModel());
    }

    /**
     * Converte um objeto model para dto
     *
     * @param instituicaoModel - model de instituição
     * @param instituicaoDTO   - dto de instituição
     * @return dto de instituição
     */
    public InstituicaoDTO modelToDto(InstituicaoModel instituicaoModel, InstituicaoDTO instituicaoDTO) {
        instituicaoDTO.setId(instituicaoModel.getId());
        instituicaoDTO.setName(instituicaoModel.getName());
        instituicaoDTO.setTipo(instituicaoModel.getTipo());

        return instituicaoDTO;
    }

    /**
     * Cria um novo dto
     *
     * @param instituicaoModel - model de instituição
     * @return dto de instituição
     */
    public InstituicaoDTO modelToDto(InstituicaoModel instituicaoModel) {
        return modelToDto(instituicaoModel, new InstituicaoDTO());
    }

    /**
     * Converte uma lista de model para uma lista de DTO
     *
     * @param instituicaoModelList - lista de model
     * @return lista de dto
     */
    public List<InstituicaoDTO> modelListToDtoList(List<InstituicaoModel> instituicaoModelList) {
        return instituicaoModelList.stream()
                .map(instituicaoModel -> modelToDto(instituicaoModel, new InstituicaoDTO()))
                .collect(Collectors.toList());
    }
}
