CREATE TABLE public.evento (
	id integer NOT NULL,
	nome varchar(200) NOT NULL,
	data_inicial date NOT NULL,
	data_final date NULL,
	ativo boolean NOT NULL,
	CONSTRAINT evento_pk PRIMARY KEY (id)
);

-- Column comments

COMMENT ON COLUMN public.evento.id IS 'Id';
COMMENT ON COLUMN public.evento.nome IS 'Nome do evento';
COMMENT ON COLUMN public.evento.data_inicial IS 'Data inicial';
COMMENT ON COLUMN public.evento.data_final IS 'Data final';
COMMENT ON COLUMN public.evento.ativo IS 'Situação do evento: ATIVO / INATIVO';