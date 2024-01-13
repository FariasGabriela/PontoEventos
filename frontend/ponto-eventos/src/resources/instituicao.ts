import axios, { AxiosResponse } from "axios";
import InstituicaoModel from "../model/instituicao";
import URL from "./URL";

/**
 * Classe de integração com endpoint de instituição
 */
export default class NavegacaoAPI {

  /**
   * Url de conexão
   */
  URL: string = `${URL()}/instituicao`;

  public async findAll(): Promise<AxiosResponse<InstituicaoModel[]>> {
    return axios({
      method: "GET",
      url: `${this.URL}`,
    });
  }

  public async findById(id: string): Promise<AxiosResponse<InstituicaoModel>> {
    return axios({
      method: "GET",
      url: `${this.URL}/${id}`,
    });
  }

  public async create(instituicao: InstituicaoModel): Promise<AxiosResponse<InstituicaoModel[]>> {
    return axios({
      method: "POST",
      url: `${this.URL}`,
      data: instituicao
    });
  }

  public async update(instituicao: InstituicaoModel): Promise<AxiosResponse<InstituicaoModel[]>> {
    return axios({
      method: "PUT",
      url: `${this.URL}`,
      data: instituicao
    });
  }


}
