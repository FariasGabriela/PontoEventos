CREATE TABLE instituicao (
	id integer NOT NULL,
	nome varchar(200) NOT NULL,
	tipo varchar(20) NOT NULL,
	CONSTRAINT instituicao_pk PRIMARY KEY (id)
);

CREATE UNIQUE INDEX instituicao_id_idx ON instituicao (id);
CREATE SEQUENCE instituicao_id_seq START 1;

-- Comentário das colunas
COMMENT ON COLUMN instituicao.id IS 'Id';
COMMENT ON COLUMN instituicao.nome IS 'Nome da instituição';
COMMENT ON COLUMN instituicao.tipo IS 'Tipo da instituição: CONFERERACAO; SINGULAR; CENTRAL; COOPERATIVA;';