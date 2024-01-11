package br.com.pontoeventos.evento.converter;

import br.com.pontoeventos.evento.dto.EventoDTO;
import br.com.pontoeventos.evento.model.EventoModel;
import br.com.pontoeventos.instituicao.converter.InstituicaoConverter;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Converter de evento
 */
@RequestScoped
public class EventoConverter {

    @Inject
    InstituicaoConverter instituicaoConverter;

    /**
     * Converte um objeto dto para um model
     *
     * @param eventoDTO   - dto de evento
     * @param eventoModel - model de evento
     * @return model de evento
     */
    public EventoModel dtoToModel(EventoDTO eventoDTO, EventoModel eventoModel) {
        eventoModel.setId(eventoDTO.getId());
        eventoModel.setName(eventoDTO.getName());
        eventoModel.setAtivo(eventoDTO.getAtivo());
        eventoModel.setDataInicial(eventoDTO.getDataInicial());
        eventoModel.setDataFinal(eventoDTO.getDataFinal());

        return eventoModel;
    }

    /**
     * Cria um novo model
     *
     * @param eventoDTO - dto de evento
     * @return model de evento
     */
    public EventoModel dtoToModel(EventoDTO eventoDTO) {
        return dtoToModel(eventoDTO, new EventoModel());
    }

    /**
     * Converte um objeto model para dto
     *
     * @param eventoModel - model de evento
     * @param eventoDTO   - dto de evento
     * @return dto de evento
     */
    public EventoDTO modelToDto(EventoModel eventoModel, EventoDTO eventoDTO) {
        eventoDTO.setId(eventoModel.getId());
        eventoDTO.setName(eventoModel.getName());
        eventoDTO.setAtivo(eventoModel.getAtivo());
        eventoDTO.setDataInicial(eventoModel.getDataInicial());
        eventoDTO.setDataFinal(eventoModel.getDataFinal());
        eventoDTO.setInstituicao(instituicaoConverter.modelToDto(eventoModel.getInstituicaoModel()));

        return eventoDTO;
    }

    /**
     * Cria um novo dto
     *
     * @param eventoModel - model de evento
     * @return dto de evento
     */
    public EventoDTO modelToDto(EventoModel eventoModel) {
        return modelToDto(eventoModel, new EventoDTO());
    }

    /**
     * Converte uma lista de model para uma lista de DTO
     *
     * @param eventoModelList - lista de model
     * @return lista de dto
     */
    public List<EventoDTO> modelListToDtoList(List<EventoModel> eventoModelList) {
        return eventoModelList.stream()
                .map(eventoModel -> modelToDto(eventoModel, new EventoDTO()))
                .collect(Collectors.toList());
    }
    
}
