import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FormsModule } from '@angular/forms';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteService } from './quote.service';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
