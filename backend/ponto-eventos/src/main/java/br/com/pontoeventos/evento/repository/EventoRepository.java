package br.com.pontoeventos.evento.repository;

import br.com.pontoeventos.evento.model.EventoModel;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

/**
 * Repository de evento
 */
@ApplicationScoped
public class EventoRepository implements PanacheRepository<EventoModel> {

    public EventoModel findById(Integer id) {
        return EventoModel.findById(id);
    }

}

