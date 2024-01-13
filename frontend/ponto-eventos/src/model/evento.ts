import InstituicaoModel from "./instituicao";

/**
 * Interface de objeto evento
 */
interface EventoModel {
    id?: number | null;
    name: string | null;
    dataInicial?: Date | string | number | null;
    dataFinal?: Date | string  | number | null;
    ativo: boolean;
    instituicao?: InstituicaoModel | null;
}

export default EventoModel;