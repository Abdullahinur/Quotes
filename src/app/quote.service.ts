import { Injectable } from '@angular/core';
import { Quote } from './quote-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service'
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class QuoteService {
  private quotesUrl = 'api/quotes'; //URL TO WEB API

  constructor(private http: HttpClient, private messageService: MessageService) { }
    getQuotes(): Observable<Quote[]> {
      return this.http.get<Quote[]>(this.quotesUrl)
        .pipe(tap(quotes => this.log(`fetched quotes`))
          catchError(this.handlerError('getQuotes', [])));


}

  getQuote(id: number): Observable<Quote> {
    // TODO: send the message_after_fetching the heroes
    this.messageService.add(`QuoteService: fetched author Number   ${id}`);
    return of(QUOTES.find(quote => quote.id === id));

}

  private log(message: string) {
    this.messageService.add('QuoteService: ' + message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handlerError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
    }
  }
}
