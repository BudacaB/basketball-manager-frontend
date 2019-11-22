import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Team } from "./team.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  getAllTeams(): Observable<Team[]> {
    const apiUrl = environment.apiUrl;
    return this.http.get<Team[]>(`${apiUrl}/Teams`);
  }

  getTeam(teamName: string): Observable<Team> {
    const apiUrl = environment.apiUrl;
    return this.http.get<Team>(`${apiUrl}/Team/${teamName}`);
  }
}
