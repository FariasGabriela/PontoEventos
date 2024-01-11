package br.com.pontoeventos.instituicao.model;

import br.com.pontoeventos.instituicao.enumeration.InstituicaoTipoEnumeration;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;

/**
 * Modelo de Instituição
 */
@Entity
@Table(name = "instituicao")
public class InstituicaoModel extends PanacheEntityBase {

    /**
     * id da instituicao
     */
    @Id
    @SequenceGenerator(
            name = "instituicaoSequence",
            sequenceName = "instituicao_id_seq",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "instituicaoSequence")
    @Column(name = "id")
    private Integer id;


    /**
     * Nome
     */
    @Column(name= "nome")
    private String name;


    /**
     * Tipo da instituição:
     * CONFERERACAO; SINGULAR; CENTRAL; COOPERATIVA;
     */
    @Column(name= "tipo")
    private String tipo;

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

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}
