package br.com.pontoeventos.utils.mapper;

import br.com.pontoeventos.utils.exception.DataInvalidaException;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;

/**
 * Mapper de data inválida
 */
@Provider
public class DataInvalidaMapper implements ExceptionMapper<DataInvalidaException> {

    @Override
    public Response toResponse(DataInvalidaException exception) {
        return Response.status(Response.Status.CONFLICT)
                .entity("A data inserida está inválida")
                .build();
    }
}