import InstituicaoModel from "./instituicao";

/**
 * Interface de objeto evento
 */
interface EventoModel {
    id: number;
    name: string;
    dataInicial: Date;
    dataFinal: Date;
    ativo: boolean;
    instituicao: InstituicaoModel;
}

export default EventoModel;