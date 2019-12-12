import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IGame } from "../store/state/game.state";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class GamesService {
  constructor(private http: HttpClient) {}

  postGame(game: IGame): Observable<IGame> {
    const apiUrl = environment.apiUrl;
    return this.http.post<IGame>(`${apiUrl}/GameState`, game);
  }

  getGames(): Observable<IGame[]> {
    const apiUrl = environment.apiUrl;
    return this.http.get<IGame[]>(`${apiUrl}/Games`);
  }
}
