/**
 * Interface de objeto instituição
 */
interface InstituicaoModel {
    id: number;
    name: string;
    tipo: TipoInstituicaoEnum;
}

export default InstituicaoModel;