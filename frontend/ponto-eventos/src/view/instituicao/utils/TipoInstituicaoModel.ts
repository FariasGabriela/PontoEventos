import { TipoInstituicaoEnum } from "../../../enum/TipoInstituicaoEnum";
import TipoModel from "../../../model/tipo";

/**
 * Select de tipo em instituição
 */
const selectTipoList: TipoModel[] = [
  { sigla: TipoInstituicaoEnum.CENTRAL, descricao: "Central" },
  { sigla: TipoInstituicaoEnum.CONFERERACAO, descricao: "Confederação" },
  { sigla: TipoInstituicaoEnum.COOPERATIVA, descricao: "Cooperativa" },
  { sigla: TipoInstituicaoEnum.SINGULAR, descricao: "Singular" },
];

export default selectTipoList;
