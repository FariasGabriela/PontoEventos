package br.com.pontoeventos.migration;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.flywaydb.core.Flyway;

/**
 * Classe para log de criação do banco de dados
 */
@ApplicationScoped
public class MigrationService {

    @Inject
    Flyway flyway;

    public void checkMigration() {
        System.out.println(flyway.info().current().getVersion().toString());
    }
}
