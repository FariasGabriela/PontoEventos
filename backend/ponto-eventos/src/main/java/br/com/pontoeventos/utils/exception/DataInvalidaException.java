package br.com.pontoeventos.utils.exception;

/**
 * Exception de data inválida
 */
public class DataInvalidaException extends RuntimeException {

    private String message;

    public DataInvalidaException(String message) {
        this.message = message;
    }

    public DataInvalidaException() {
    }

    @Override
    public String getMessage() {
        return message;
    }
}