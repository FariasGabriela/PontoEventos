package br.com.pontoeventos.instituicao.enumeration;

/**
 * Tipos que uma instituição pode representar
 */
public enum InstituicaoTipoEnumeration {

    /**
     * Conferederação
     */
    CONFERERACAO("CONFERERACAO"),

    /**
     * Singular
     */
    SINGULAR("SINGULAR"),

    /**
     * Central
     */
    CENTRAL("CENTRAL"),

    /**
     * Cooperativa
     */
    COOPERATIVA("COOPERATIVA");

    public String tipo;

    InstituicaoTipoEnumeration(String tipo) {
        this.tipo = tipo;
    }
}
