import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import {boardService} from './board/board.Service'
import {cardService} from './cards/cards.service'
import { from } from 'rxjs';
import { CardsComponent } from './cards/cards.component';
// import { CarddetailsComponent } from './carddetails/carddetails.component';
import { CardDetailsComponent } from './cardDetails/cardDetails.component';
import { CheckItemsComponent } from './checkItems/checkItems.component';

@NgModule({
   declarations: [
      AppComponent,
      BoardComponent,
      CardsComponent,
      //CarddetailsComponent,
      CardDetailsComponent,
      CheckItemsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [
      boardService,
      cardService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
