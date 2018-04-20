import { Injectable } from '@angular/core';
import { Quote } from './quote-model';
import { QUOTES } from './mock-quotes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class QuoteService {

    getQuotes(): Observable<Quote[]> {
          return of(QUOTES);
}
  constructor() { }

}
