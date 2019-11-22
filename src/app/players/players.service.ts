import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Player } from "./player.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class PlayersService {
  constructor(private http: HttpClient) {}

  getPlayer(playerLastName: string): Observable<Player> {
    const apiUrl = environment.apiUrl;
    return this.http.get<Player>(`${apiUrl}/Player/${playerLastName}`);
  }
}
