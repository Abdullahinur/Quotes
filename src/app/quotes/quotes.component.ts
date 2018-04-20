import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote-model';
import { QUOTES } from '../mock-quotes';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
quotes: Quote[];

  selectedQuote: Quote;

  onSelect(quote: Quote): void {
    this.selectedQuote = quote;
  }


  constructor(private quoteService: QuoteService) {
    // this.quotes = this.quoteService.getQuotes()

  }


   getQuotes(): void {
     this.quoteService.getQuotes()
         .subscribe(quotes => this.quotes = quotes);
   }

  ngOnInit() {
    this.getQuotes();
  }

}
