import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../../shared/services/message.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

  constructor(private readonly messageService: MessageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    const modifiedRequest = request.clone({

    });

    return next.handle(modifiedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Interceptor - Erro na Requisição', error);
        this.messageService.httpErrorMessage(error)
        return throwError(error);
      })
    );
  }
}
