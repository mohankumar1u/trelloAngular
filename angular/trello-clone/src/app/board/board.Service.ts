import  {  trello } from '../mork-trello';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
// import {urlSearchParams} from '@angular/http'
// let urlSearchParams= new urlSearchParams();
export class boardService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
    constructor(
      private http: HttpClient, 
      ) { }
      getList (): Observable<any> {
        return this.http.get(`https://api.trello.com/1/boards/${trello[0].boardsId}/lists/?key=${trello[0].key}&token=${trello[0].apiKey}`)
      }
      addlist (name): Observable<any> {
        console.log(name)
        return this.http.post(`https://api.trello.com/1/lists?name=${name}&pos=bottom&idBoard=${trello[0].boardsId}&key=${trello[0].key}&token=${trello[0].apiKey}`, this.httpOptions)
      }
      getCardDetails(id): Observable<any>{
        return this.http.get(`https://api.trello.com/1/cards/${id}/checklists?checkItems=all&checkItem_fields=name%2CnameData%2Cpos%2Cstate&filter=all&fields=all&key=${trello[0].key}&token=${trello[0].apiKey}`)
      }
      deleteCard(id): Observable<any> {
        return this.http.delete(`https://api.trello.com/1/cards/${id}?key=${trello[0].key}&token=${trello[0].apiKey}`)
      }
    // private log(message: string) {

    // }
}
    