package br.com.pontoeventos.scheduler;

import br.com.pontoeventos.evento.service.EventoService;
import io.quarkus.scheduler.Scheduled;
import io.quarkus.scheduler.ScheduledExecution;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

@ApplicationScoped
public class EventoScheduler {

    @Inject
    EventoService eventoService;

    @Scheduled(cron = "0 08 10 * * ?")
    void cronJob(ScheduledExecution execution) {
        eventoService.validarVigenciaEventos();
    }


}
