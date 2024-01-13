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

  public async findAll(): Promise<AxiosResponse<InstituicaoModel[]>> {
    return axios({
      method: "GET",
      url: `${this.URL}/instituicao/`,
    });
  }

  public async findById(id: string): Promise<AxiosResponse<InstituicaoModel>> {
    return axios({
      method: "GET",
      url: `${this.URL}/instituicao/${id}`,
    });
  }

  public async create(instituicao: InstituicaoModel): Promise<AxiosResponse<InstituicaoModel[]>> {
    return axios({
      method: "POST",
      url: `${this.URL}/instituicao/`,
      data: instituicao
    });
  }

  public async update(instituicao: InstituicaoModel): Promise<AxiosResponse<InstituicaoModel[]>> {
    return axios({
      method: "PUT",
      url: `${this.URL}/instituicao/`,
      data: instituicao
    });
  }


}
