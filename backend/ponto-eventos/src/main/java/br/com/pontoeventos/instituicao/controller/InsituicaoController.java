package br.com.pontoeventos.instituicao.controller;

import br.com.pontoeventos.instituicao.dto.InstituicaoDTO;
import br.com.pontoeventos.instituicao.service.InstituicaoService;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

/**
 * Endpoint de Instituição
 */
@Path("/instituicao")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class InsituicaoController {

    @Inject
    InstituicaoService instituicaoService;

    @GET
    public Response findAll() {
        return Response.ok().entity(instituicaoService.findAll()).build();
    }

    @GET
    @Path("/{id}")
    public Response findById(@PathParam("id") String id) {
        return Response.ok().entity(instituicaoService.findById(Integer.valueOf(id))).build();
    }

    @POST
    public Response create(InstituicaoDTO instituicaoDTO) {
        return Response.ok(instituicaoService.create(instituicaoDTO)).build();
    }

    @PUT
    public Response update(InstituicaoDTO instituicaoDTO) {
        return Response.ok(instituicaoService.update(instituicaoDTO)).build();
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") String id) {
        return Response.ok(instituicaoService.delete(Integer.valueOf(id))).build();
    }

}
