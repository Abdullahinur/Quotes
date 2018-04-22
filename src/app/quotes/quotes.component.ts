import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote-model';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
quotes: Quote[];



  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.getQuotes();
  }

   getQuotes(): void {
     this.quoteService.getQuotes()
         .subscribe(quotes => this.quotes = quotes);
   }

  ab() {
    alert('working')
  }
  add(quote: string, author: string, submittedBy: any): void {
    quote = quote.trim();
    author = author.trim();
    submittedBy = submittedBy.trim();

    if (!quote) (author, submittedBy) => { return; }
    this.quoteService.addQuote({ quote, author, submittedBy } as Quote).subscribe(quote => { this.quotes.push(quote)}, author => {this.quotes.push(author)}, submittedBy)
  }

  delete(quote: Quote): void {
    this.quotes = this.quotes.filter(q => q !== quote);
    this.quoteService.deleteQuote(quote).subscribe();
  }
}
