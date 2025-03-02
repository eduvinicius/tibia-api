import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _messageError: string = '';

  httpErrorMessage(error: HttpErrorResponse): void {
    switch(error.status) {
      case 404:
        this._messageError = 'O recurso não foi encontrado'
        break;

      case 500:
        this._messageError = 'Erro interno do servidor'
        break;

      case 502:
        this._messageError = 'Resposta inválida do servidor'
        break;

      case 503:
        this._messageError = 'Serviço Indisponível'
        break;

      default:
        this._messageError = 'Erro ao fazer a requisição dos dados'
    }

    alert(this._messageError)
  }
}
