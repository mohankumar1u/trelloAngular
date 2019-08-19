import  {  trello } from '../mork-trello';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs'

export class cardService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
    constructor(
      private http: HttpClient,
      ) { }
      getCards (id): Observable<any> {
        return this.http.get(`https://api.trello.com/1/lists/${id}/cards?key=${trello[0].key}&token=${trello[0].apiKey}`)
      }
      addCard(id,name): Observable<any> {
        return this.http.post(`https://api.trello.com/1/cards?name=${name}&pos=top&idList=${id}&keepFromSource=all&key=${trello[0].key}&token=${trello[0].apiKey}`, this.httpOptions)
      }
      
}
    