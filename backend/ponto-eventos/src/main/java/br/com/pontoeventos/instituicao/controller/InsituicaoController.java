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

    /**
     * Service de Instituição
     */
    @Inject
    InstituicaoService instituicaoService;

    /**
     * Busca todas as Instituições
     */
    @GET
    public Response findAll() {
        return Response.ok().entity(instituicaoService.findAll()).build();
    }

    /**
     * Busca uma instituição pelo id
     */
    @GET
    @Path("/{id}")
    public Response findById(@PathParam("id") String id) {
        return Response.ok().entity(instituicaoService.findById(Integer.valueOf(id))).build();
    }

    /**
     * Cria uma nova instituição
     * @param instituicaoDTO - DTO de instituição
     */
    @POST
    public Response create(InstituicaoDTO instituicaoDTO) {
        return Response.ok(instituicaoService.create(instituicaoDTO)).build();
    }

    /**
     * Edita uma instituição
     * @param instituicaoDTO - DTO de instituição
     */
    @PUT
    public Response update(InstituicaoDTO instituicaoDTO) {
        return Response.ok(instituicaoService.update(instituicaoDTO)).build();
    }

    /**
     * Deleta uma instituição
     * @param id - id da instituição
     */
    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") String id) {
        return Response.ok(instituicaoService.delete(Integer.valueOf(id))).build();
    }

}
