import axios, { AxiosResponse } from "axios";
import EventoModel from "../model/evento";

/**
 * Classe de integração com endpoint de instituição
 */
export default class NavegacaoAPI {

  /**
   * Url de conexão
   */
  URL: string = `http://localhost:8080`;  //todo

  public async getImageByPosition( position: number ): Promise<AxiosResponse<EventoModel>> {
    return axios({
      method: "get",
      url: `${this.URL}/evento/${position}`,
    });
  }

}
