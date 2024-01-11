package br.com.pontoeventos.instituicao.dto;

/**
 * DTO de Instituição
 */
public class InstituicaoDTO {

    /**
     * id
     */
    private Integer id;

    /**
     * Name
     */
    private String name;

    /**
     * Tipo
     */
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
