package br.com.pontoeventos.utils.exception;

import jakarta.ws.rs.ext.Provider;

/**
 * Exception de não poder excluir objeto por causa de dependencias
 */
@Provider
public class DependenciasException extends RuntimeException {

    private String message;

    public DependenciasException(String message) {
        this.message = message;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
