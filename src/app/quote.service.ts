import { Injectable } from '@angular/core';
import { Quote } from './quote-model';
import { QUOTES } from './mock-quotes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service'

@Injectable()
export class QuoteService {

    getQuotes(): Observable<Quote[]> {
      // TODO: send the message_after_fetching the heroes
          this.messageService.add('QuoteService: fetched quotes')
          return of(QUOTES);
}
  constructor(private messageService: MessageService) { }

}
