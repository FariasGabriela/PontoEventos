package br.com.pontoeventos.utils.mapper;

import br.com.pontoeventos.utils.exception.NaoEncontradoException;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;

@Provider
public class NaoEncontradoMapper implements ExceptionMapper<NaoEncontradoException> {

    @Override
    public Response toResponse(NaoEncontradoException exception) {
        return Response.status(Response.Status.NOT_FOUND)
                .entity("O valor " + exception.getMessage() + " não foi encontrado na base de dados")
                .build();
    }
}