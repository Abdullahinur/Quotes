import { Injectable } from '@angular/core';
import { Quote } from './quote-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service'
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type':  'application/json'})
};


@Injectable()
export class QuoteService {
  private quotesUrl = 'api/quotes'; //URL TO WEB API

  constructor(private http: HttpClient, private messageService: MessageService) { }
    getQuotes(): Observable<Quote[]> {
      return this.http.get<Quote[]>(this.quotesUrl)
        .pipe(tap(quotes => this.log(`fetched quotes`)),
          catchError(this.handlerError('getQuotes', [])));


}

  getQuote(id: number): Observable<Quote> {

    const url = `${this.quotesUrl}/${id}`;
    return this.http.get<Quote>(url).pipe(tap(_=> this.log(`fetched quote id=${id}`)),
    catchError(this.handlerError<Quote>(`getQuote id=${id}`))
  );
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

    deleteQuote (quote: Quote | number): Observable<Quote> {
      const id = typeof quote === 'number' ? quote : quote.id;
      const url = `${this.quotesUrl}/${id}`;

      return this.http.delete<Quote>(url, httpOptions).pipe(tap(_ => this.log(`delete hero id=${id}`)),
      catchError(this.handlerError<Quote>('deleteQuote')))
    };

    addQuote (quote: Quote): Observable<Quote> {
      return this.http.post<Quote>(this.quotesUrl, quote, httpOptions).pipe(tap((quote: Quote) => this.log(`added quote w/ id=${quote.id}`)),
      catchError(this.handlerError<Quote>('addQuote'))
    );
  };

    updateQuote (quote: Quote): Observable<any> {
      return this.http.put(this.quotesUrl, quote, httpOptions).pipe(
        tap(_=>this.log(`updated quote id ${quote.id}`)),
        catchError(this.handlerError<any>('updateQuote'))
      );
    };

    searchQuotes(term: string): Observable<Quote[]> {
      if (!term.trim()) {
        // if no search term return empty quote array.
        return of ([]);
      }
      return this.http.get<Quote[]>(`api/quotes/?name=${term}`).pipe(tap(_ => this.log(`found quotes matching "${term}"`)),
      catchError(this.handlerError<Quote[]>(`searchQuotes`, []))
    );
    }

}
