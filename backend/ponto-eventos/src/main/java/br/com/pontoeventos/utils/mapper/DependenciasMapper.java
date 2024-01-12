package br.com.pontoeventos.utils.mapper;

import br.com.pontoeventos.utils.exception.DependenciasException;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;

public class DependenciasMapper implements ExceptionMapper<DependenciasException> {

    @Override
    public Response toResponse(DependenciasException exception) {
        return Response.status(Response.Status.CONFLICT)
                .entity("Existe um evento com essa instituição")
                .build();
    }
}