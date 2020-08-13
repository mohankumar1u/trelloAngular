import { Component, Renderer2, OnInit } from '@angular/core';
import {boardService} from './board.Service'
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { IBoard } from './board';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
 boards:IBoard[]
 cardDetails:[]
 status:boolean=true;
 displayPopup:boolean=false;
 listName:string;
 cardId:string;
 popupboardId: any;
  constructor(private boardService: boardService, private renderer:Renderer2
    //, private cardService: cardService
    ) { }

  ngOnInit() {
    this.getList()
    console.log(this.boards)
  }
  getList=()=>{
    this.boardService.getList()
    .subscribe(board =>{ console.log(board)
  this.boards = [...board]
    });
  }
  cards=(e)=>{
    this.status=!this.status;
  }
  closeAdd=()=>{
    this.status=!this.status;
  }
  addList=(e)=>{
    this.listName=e.target.parentElement.parentElement.querySelector('input').value
    e.target.parentElement.parentElement.querySelector('input').value=""
    this.boardService.addlist( this.listName)
    .subscribe(board=>{ this.boards.push(board)})
  }
  popup=(id,boardId)=>{
  //  console.log(id)
  this.popupboardId=boardId
  this.cardId=id
   this.boardService.getCardDetails(this.cardId).subscribe(cardDetails=>{
    this.cardDetails=cardDetails;
    console.log(cardDetails);
   });
    this.displayPopup=!this.displayPopup;
  }
  popupClose=(e)=>{
    // console.log(e.target.className);
    if (e.target.className == 'afterCardClick' )
    {
      this.displayPopup=!this.displayPopup;
    }
    else{
    return;
    }
    
  }
  ArchiveCard=(cardId,cardDetails)=>{
    this.boardService.deleteCard(cardId).subscribe(obj=>{
      this.boardService.getList()
      .subscribe(board =>{ console.log(board)
    this.boards = [...board]
      });
      this.displayPopup=!this.displayPopup
      console.log(this.boards,cardDetails )
    })
    console.log(cardId)
  }
 
}
