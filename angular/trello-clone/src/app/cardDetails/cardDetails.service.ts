import { Injectable } from '@angular/core';
import {trello} from '../mork-trello';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardDetailsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
constructor( private http: HttpClient) { }
addChecklist (name,cardId): Observable<any> {
  console.log(name,cardId)
  return this.http.post(`https://api.trello.com/1/checklists?idCard=${cardId}&name=${name}&key=${trello[0].key}&token=${trello[0].apiKey}`, this.httpOptions)
}
deleteChecklist(id): Observable<any> {
  console.log(id)
  return this.http.delete(`https://api.trello.com/1/checklists/${id}?key=${trello[0].key}&token=${trello[0].apiKey}`, this.httpOptions)
}
}
