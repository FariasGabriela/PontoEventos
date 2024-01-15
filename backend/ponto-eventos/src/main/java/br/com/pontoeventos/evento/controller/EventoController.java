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

    /**
     * Inject de service
     */
    @Inject
    EventoService eventoService;

    /**
     * Endpoint para buscar todos os eventos
     */
    @GET
    public Response findAll() {
        return Response.ok().entity(eventoService.findAll()).build();
    }

    /**
     * Endpoint para buscar o evento pelo id
     */
    @GET
    @Path("/{id}")
    public Response findById(@PathParam("id") String id) {
        return Response.ok().entity(eventoService.findById(Integer.valueOf(id))).build();
    }

    /**
     * Cria um novo evento
     *
     * @param eventoDTO - DTO de evento
     */
    @POST
    public Response create(EventoDTO eventoDTO) {
        return Response.ok(eventoService.create(eventoDTO)).build();
    }

    /**
     * Edita um evento existente
     *
     * @param eventoDTO - DTO de evento
     */
    @PUT
    public Response update(EventoDTO eventoDTO) {
        return Response.ok(eventoService.update(eventoDTO)).build();
    }

    /**
     * Deleta o evento
     *
     * @param id - id do evento a ser deletado
     */
    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") String id) {
        return Response.ok(eventoService.delete(Integer.valueOf(id))).build();
    }
}
