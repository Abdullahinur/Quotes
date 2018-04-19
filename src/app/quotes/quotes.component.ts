import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote-model';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote: Quote = {
    quote: 'Do you feel lucky Punk?!',
    author: 'Dane Cook',
    submittedBy: 'Abdullahi'
  };

  constructor() { }

  ngOnInit() {
  }

}
