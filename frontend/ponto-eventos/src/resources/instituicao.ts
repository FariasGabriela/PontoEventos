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

  /**
   * Busca todos as instituições
   *
   * @returns - lista de instituições
   */
  public async findAll(): Promise<AxiosResponse<InstituicaoModel[]>> {
    return axios({
      method: "GET",
      url: `${this.URL}`,
    });
  }

  /**
   * Busca uma instituição pelo id
   *
   * @param id - id da instituição
   * @returns - instituição corresponte ao id selecionado
   */
  public async findById(id: string): Promise<AxiosResponse<InstituicaoModel>> {
    return axios({
      method: "GET",
      url: `${this.URL}/${id}`,
    });
  }

  /**
   * Cria uma nova instituição
   *
   * @param instituicao - model de instituição
   * @returns
   */
  public async create(
    instituicao: InstituicaoModel
  ): Promise<AxiosResponse<InstituicaoModel[]>> {
    return axios({
      method: "POST",
      url: `${this.URL}`,
      data: instituicao,
    });
  }

  /**
   * Edita uma instituição
   *
   * @param instituicao - model de instituição
   * @returns
   */
  public async update(
    instituicao: InstituicaoModel
  ): Promise<AxiosResponse<InstituicaoModel[]>> {
    return axios({
      method: "PUT",
      url: `${this.URL}`,
      data: instituicao,
    });
  }
}
