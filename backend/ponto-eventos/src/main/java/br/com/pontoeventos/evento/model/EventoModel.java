package br.com.pontoeventos.evento.model;

import br.com.pontoeventos.instituicao.model.InstituicaoModel;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;

import java.time.LocalDate;

/**
 * Modelo de evento
 */
@Entity
@Table(name = "evento")
public class EventoModel extends PanacheEntityBase {

    /**
     * id da evento
     */
    @Id
    @SequenceGenerator(
            name = "eventoSequence",
            sequenceName = "evento_id_seq",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "eventoSequence")
    @Column(name = "id")
    private Integer id;


    /**
     * Nome
     */
    @Column(name = "nome")
    private String name;


    /**
     * Data inicial
     */
    @Column(name = "data_inicial")
    private LocalDate dataInicial;


    /**
     * Date final
     */
    @Column(name = "data_final")
    private LocalDate dataFinal;

    /**
     * Situação do evento
     * ATIVO/INATIVO
     */
    @Column(name = "ativo")
    private Boolean ativo;

    /**
     * Instituição
     */
    @ManyToOne
    @JoinColumn(name = "id_instituicao")
    private InstituicaoModel instituicaoModel;

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

    public InstituicaoModel getInstituicaoModel() {
        return instituicaoModel;
    }

    public void setInstituicaoModel(InstituicaoModel instituicaoModel) {
        this.instituicaoModel = instituicaoModel;
    }
}
