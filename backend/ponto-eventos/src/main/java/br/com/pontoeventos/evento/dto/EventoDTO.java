package br.com.pontoeventos.evento.dto;

import br.com.pontoeventos.instituicao.dto.InstituicaoDTO;

import java.time.LocalDate;

/**
 * DTO de evento
 */
public class EventoDTO {

    /**
     * id da evento
     */
    private Integer id;

    /**
     * Nome
     */
    private String name;

    /**
     * Data inicial
     */
    private LocalDate dataInicial;

    /**
     * Date final
     */
    private LocalDate dataFinal;

    /**
     * Situação do evento
     * ATIVO/INATIVO
     */
    private Boolean ativo;

    /**
     * DTO de instituição
     */
    private InstituicaoDTO instituicao;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDataInicial() {
        return dataInicial;
    }

    public void setDataInicial(LocalDate dataInicial) {
        this.dataInicial = dataInicial;
    }

    public LocalDate getDataFinal() {
        return dataFinal;
    }

    public void setDataFinal(LocalDate dataFinal) {
        this.dataFinal = dataFinal;
    }

    public Boolean getAtivo() {
        return ativo;
    }

    public void setAtivo(Boolean ativo) {
        this.ativo = ativo;
    }

    public InstituicaoDTO getInstituicao() {
        return instituicao;
    }

    public void setInstituicao(InstituicaoDTO instituicao) {
        this.instituicao = instituicao;
    }
}
