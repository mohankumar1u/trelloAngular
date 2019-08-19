import { Component, Renderer2, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { cardService } from './cards.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() id:string;
  @Output() CardDetails:EventEmitter<string>= new EventEmitter<string>();
  cards;
  cardName:string;
  cardStatus:boolean=true;
  // :Icard;

  constructor(private cardService:cardService, private renderer:Renderer2) { }

  ngOnInit() {
    this.getCards()
    // console.log(this.cards)
  }
  getCards=()=>{
    this.cardService.getCards(this.id)
    .subscribe(card =>{ console.log(card)
  this.cards = [...card]
    });
  }
  list=(e,id)=>{
    this.CardDetails.emit(id);
    // this.cardService.getChecklist(idChecklists)
  }
  card=()=>{
    this.cardStatus=!this.cardStatus;
  }
  addClose=()=>{
    this.cardStatus=!this.cardStatus;
  }
  addCard=(e)=>{
    this.cardName=e.target.parentElement.parentElement.querySelector('input').value
    this.cardService.addCard(this.id,this.cardName)
    .subscribe(card=>{ this.cards.push(card)});
  }
}
