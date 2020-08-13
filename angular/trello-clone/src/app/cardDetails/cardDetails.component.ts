import { Component, OnInit, Input } from '@angular/core';
import {CardDetailsService} from "./cardDetails.service"
@Component({
  selector: 'app-cardDetails',
  templateUrl: './cardDetails.component.html',
  styleUrls: ['./cardDetails.component.css']
})
export class CardDetailsComponent implements OnInit {

  @Input() cardDetails:any
  @Input() cardId:any
  name:string;
  constructor(private CardDetailsService: CardDetailsService) { }

  ngOnInit() {
  }
  addChecklist=(e)=>{
    this.name=e.target.parentElement.querySelector('input').value
    e.target.parentElement.querySelector('input').value=""
    this.CardDetailsService.addChecklist(this.name,this.cardId).subscribe(checklist=>{ this.cardDetails.push(checklist)});
  }
  deleteCheckList=(id)=>{
    this.CardDetailsService.deleteChecklist(id).subscribe(response=>
      console.log(response));
      this.cardDetails=this.cardDetails.filter(item=>item.id != id)
 console.log(id);
 console.log('working')
  }
 
}
