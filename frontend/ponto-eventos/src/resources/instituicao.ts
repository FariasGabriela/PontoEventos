import axios, { AxiosResponse } from "axios";
import InstituicaoModel from "../model/instituicao";

/**
 * Classe de integração com endpoint de instituição
 */
export default class NavegacaoAPI {

  /**
   * Url de conexão
   */
  URL: string = `http://localhost:8080`;  //todo

  public async getImageByPosition( position: number ): Promise<AxiosResponse<InstituicaoModel>> {
    return axios({
      method: "get",
      url: `${this.URL}/instituicao/${position}`,
    });
  }

}
