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

  public async findAll(): Promise<AxiosResponse<EventoModel[]>> {
    return axios({
      method: "GET",
      url: `${this.URL}/evento/`,
    });
  }

  public async findById(id: string): Promise<AxiosResponse<EventoModel>> {
    return axios({
      method: "GET",
      url: `${this.URL}/evento/${id}`,
    });
  }

  public async create(evento: EventoModel): Promise<AxiosResponse<EventoModel[]>> {
    return axios({
      method: "POST",
      url: `${this.URL}/evento/`,
      data: evento
    });
  }

  public async update(evento: EventoModel): Promise<AxiosResponse<EventoModel[]>> {
    return axios({
      method: "PUT",
      url: `${this.URL}/evento/`,
      data: evento
    });
  }

}
