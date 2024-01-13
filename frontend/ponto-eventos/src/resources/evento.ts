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

  public async findAll(): Promise<AxiosResponse<EventoModel[]>> {
    console.log(process.env.REACT_APP_URL_BACKEND)
    return axios({
      method: "GET",
      url: `${this.URL}`,
    });
  }

  public async findById(id: string): Promise<AxiosResponse<EventoModel>> {
    return axios({
      method: "GET",
      url: `${this.URL}/${id}`,
    });
  }

  public async create(evento: EventoModel): Promise<AxiosResponse<EventoModel[]>> {
    return axios({
      method: "POST",
      url: `${this.URL}`,
      data: evento
    });
  }

  public async update(evento: EventoModel): Promise<AxiosResponse<EventoModel[]>> {
    return axios({
      method: "PUT",
      url: `${this.URL}`,
      data: evento
    });
  }

}
