import {RouterModule, Routes} from "@angular/router";
import {QuoteComponent} from "./quote/quote.component";
import {NewQuoteComponent} from "./new-quote/new-quote.component";
import {ModuleWithProviders} from "@angular/core";
import {QuotesComponent} from "./quotes/quotes.component";

const APP_ROUTES: Routes =[
    {path:'',component:QuotesComponent},
    {path:'new-quote',component:NewQuoteComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);