import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {trello} from '../mork-trello';

@Injectable({
  providedIn: 'root'
})
export class CheckItemService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
constructor( private http: HttpClient) { }
addCheckItem(id, name): Observable<any>{
  return this.http.post(`https://api.trello.com/1/checklists/${id}/checkItems?name=${name}&pos=bottom&checked=false&key=${trello[0].key}&token=${trello[0].apiKey}`, this.httpOptions)

console.log(id, name);
}
checkItemState(id, state, cardId): Observable<any>{
  return this.http.put(`https://api.trello.com/1/cards/${cardId}/checkItem/${id}?state=${state}&key=${trello[0].key}&token=${trello[0].apiKey}`, this.httpOptions)
}
}
