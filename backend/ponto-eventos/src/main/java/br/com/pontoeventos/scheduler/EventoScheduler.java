package br.com.pontoeventos.scheduler;

import br.com.pontoeventos.evento.service.EventoService;
import io.quarkus.scheduler.Scheduled;
import io.quarkus.scheduler.ScheduledExecution;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

/**
 * Classe para eventos periodicos
 */
@ApplicationScoped
public class EventoScheduler {

    @Inject
    EventoService eventoService;

    /**
     * É executado todos os dias a meia noite e verifica os eventos vigentes
     */
    @Scheduled(cron = "0 00 00 * * ?")
    void cronJob(ScheduledExecution execution) {
        eventoService.validarVigenciaEventos();
    }


}
