import { Injectable } from '@angular/core';
import { Quote } from './quote-model';
import { QUOTES } from './mock-quotes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service'


@Injectable()
export class QuoteService {

  constructor(private messageService: MessageService) { }
    getQuotes(): Observable<Quote[]> {
      // TODO: send the message_after_fetching the heroes
          this.messageService.add('QuoteService: fetched quotes')
          return of(QUOTES);


}

  getQuote(id: number): Observable<Quote> {
    // TODO: send the message_after_fetching the heroes
    this.messageService.add(`QuoteService: fetched author Number   ${id}`);
    return of(QUOTES.find(quote => quote.id === id));

}

}
