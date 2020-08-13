import { Component, OnInit, Input} from '@angular/core';
import{CheckItemService} from './checkItem.service';

@Component({
  selector: 'app-checkItems',
  templateUrl: './checkItems.component.html',
  styleUrls: ['./checkItems.component.css']
})
export class CheckItemsComponent implements OnInit {
  @Input() checkItems;
  @Input() checklistId;
  @Input() cardId;
  name:string;
  current:any;
  state:string;
  displayAdd:boolean=false;
  constructor(private checkItemService :CheckItemService) { }

  ngOnInit() {
    console.log(this.checkItems)
  }
  checkItem=()=>{
    console.log('working');
    this.displayAdd=!this.displayAdd
  }
  checkItemAdd=(e)=>{
    this.name=e.target.parentElement.querySelector('input').value;

    this.checkItemService.addCheckItem(this.checklistId, this.name).subscribe(
      checkItem=>this.checkItems.push(checkItem)
    )
  }
  checkItemCompleted=(checkItem)=>{
    // console.log(checkItem)
     this.current=this.checkItems.filter(item=>item.id==checkItem.id)
    console.log(this.current)
    if(this.current[0].state=='complete'){
    this.state='incomplete'
    this.current[0].state='incomplete'
    }else{
      this.state='complete'
      this.current[0].state='complete'
    }
    this.checkItemService.checkItemState(this.current[0].id, this.state, this.cardId).subscribe(

    )
  }

}
