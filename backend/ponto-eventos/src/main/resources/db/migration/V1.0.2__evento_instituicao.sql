ALTER TABLE evento ADD id_instituicao integer NOT NULL;

ALTER TABLE evento ADD CONSTRAINT evento_instituicao_fk FOREIGN KEY (id_instituicao) REFERENCES instituicao(id);
