package br.com.pontoeventos.utils.exception;

public class NaoEncontradoException extends RuntimeException {

    private String message;

    public NaoEncontradoException(String message) {
        this.message = message;
    }

    public NaoEncontradoException() {
    }

    @Override
    public String getMessage() {
        return message;
    }
}
