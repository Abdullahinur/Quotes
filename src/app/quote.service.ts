import { Injectable } from '@angular/core';
import { Quote } from './quote-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service'


@Injectable()
export class QuoteService {
  private quotesUrl = 'api/quotes'; //URL TO WEB API

  constructor(private http: HttpClient, private messageService: MessageService) { }
    getQuotes(): Observable<Quote[]> {

          return this.http.get<Quote[]>(this.quotesUrl);


}

  getQuote(id: number): Observable<Quote> {
    // TODO: send the message_after_fetching the heroes
    this.messageService.add(`QuoteService: fetched author Number   ${id}`);
    return of(QUOTES.find(quote => quote.id === id));

}

  private log(message: string) {
    this.messageService.add('QuoteService: ' + message);
  }

}
