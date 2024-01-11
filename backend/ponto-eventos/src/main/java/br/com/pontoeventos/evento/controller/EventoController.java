package br.com.pontoeventos.evento.controller;

import br.com.pontoeventos.evento.dto.EventoDTO;
import br.com.pontoeventos.evento.service.EventoService;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

/**
 * Endpoint de evento
 */
@Path("/evento")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class EventoController {

    @Inject
    EventoService eventoService;

    @GET
    public Response findAll() {
        return Response.ok().entity(eventoService.findAll()).build();
    }

    @GET
    @Path("/{id}")
    public Response findById(@PathParam("id") String id) {
        return Response.ok().entity(eventoService.findById(Integer.valueOf(id))).build();
    }

    @POST
    public Response create(EventoDTO eventoDTO) {
        return Response.ok(eventoService.create(eventoDTO)).build();
    }

    @PUT
    public Response update(EventoDTO eventoDTO) {
        return Response.ok(eventoService.update(eventoDTO)).build();
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") String id) {
        return Response.ok(eventoService.delete(Integer.valueOf(id))).build();
    }
}
