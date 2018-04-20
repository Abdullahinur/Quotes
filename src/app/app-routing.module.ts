import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:quote', component: QuoteDetailComponent },
  { path: 'quotes', component: QuotesComponent },
];

@NgModule({
  imports: [ RouterModule. forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule {}
