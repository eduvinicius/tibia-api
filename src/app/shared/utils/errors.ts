import { Observable, throwError } from "rxjs";

export const handleAPIError = (error: Error): Observable<never> => {
  return throwError(() => new Error(error.message));
}
