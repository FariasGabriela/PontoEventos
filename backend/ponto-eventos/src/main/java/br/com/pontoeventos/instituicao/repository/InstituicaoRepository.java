package br.com.pontoeventos.instituicao.repository;

import br.com.pontoeventos.instituicao.model.InstituicaoModel;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class InstituicaoRepository implements PanacheRepository<InstituicaoModel> {

    public InstituicaoModel findById(Integer id) {
        return InstituicaoModel.findById(id);
    }
}

