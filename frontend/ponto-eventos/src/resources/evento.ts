import axios, { AxiosResponse } from "axios";
import EventoModel from "../model/evento";
import URL from "./URL";

/**
 * Classe de integração com endpoint de instituição
 */
export default class NavegacaoAPI {
  /**
   * Url de conexão
   */
  URL: string = `${URL()}/evento`;

  /**
   * Busca todos os eventos
   *
   * @returns - lista de eventos
   */
  public async findAll(): Promise<AxiosResponse<EventoModel[]>> {
    return axios({
      method: "GET",
      url: `${this.URL}`,
    });
  }

  /**
   * Busca o evento pelo id
   *
   * @param id id do evento
   * @returns evento corresponte ao id
   */
  public async findById(id: string): Promise<AxiosResponse<EventoModel>> {
    return axios({
      method: "GET",
      url: `${this.URL}/${id}`,
    });
  }

  /**
   * Cria um novo evento
   *
   * @param evento - model de evento
   */
  public async create(
    evento: EventoModel
  ): Promise<AxiosResponse<EventoModel[]>> {
    return axios({
      method: "POST",
      url: `${this.URL}`,
      data: evento,
    });
  }

  /**
   * Atualiza um evento
   *
   * @param evento - model de evento
   */
  public async update(
    evento: EventoModel
  ): Promise<AxiosResponse<EventoModel[]>> {
    return axios({
      method: "PUT",
      url: `${this.URL}`,
      data: evento,
    });
  }
}
