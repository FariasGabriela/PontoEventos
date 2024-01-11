CREATE TABLE evento (
	id integer NOT NULL,
	nome varchar(200) NOT NULL,
	data_inicial date NOT NULL,
	data_final date NOT NULL,
	ativo boolean NOT NULL,
	CONSTRAINT evento_pk PRIMARY KEY (id)
);

CREATE UNIQUE INDEX evento_id_idx ON evento (id);
CREATE SEQUENCE evento_id_seq START 1;

-- Comentário das colunas
COMMENT ON COLUMN evento.id IS 'Id';
COMMENT ON COLUMN evento.nome IS 'Nome do evento';
COMMENT ON COLUMN evento.data_inicial IS 'Data inicial';
COMMENT ON COLUMN evento.data_final IS 'Data final';
COMMENT ON COLUMN evento.ativo IS 'Situação do evento: ATIVO / INATIVO';