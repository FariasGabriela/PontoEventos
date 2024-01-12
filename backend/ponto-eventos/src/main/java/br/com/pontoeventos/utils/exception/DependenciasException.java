package br.com.pontoeventos.utils.exception;

import jakarta.ws.rs.ext.Provider;

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
