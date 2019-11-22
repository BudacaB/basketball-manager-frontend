import { Component, OnInit, OnDestroy } from "@angular/core";
import { Team } from "../team.model";
import { TeamsService } from "../teams.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-list-teams",
  templateUrl: "./list-teams.component.html",
  styleUrls: ["./list-teams.component.css"]
})
export class ListTeamsComponent implements OnInit, OnDestroy {
  teams: Team[];
  getAllTeamsSubscription: Subscription;

  constructor(private teamService: TeamsService) {}

  ngOnInit(): void {
    this.getAllTeams();
  }

  getAllTeams() {
    this.getAllTeamsSubscription = this.teamService
      .getAllTeams()
      .subscribe(result => (this.teams = result));
  }

  ngOnDestroy(): void {
    if (this.getAllTeamsSubscription) {
      this.getAllTeamsSubscription.unsubscribe();
    }
  }
}
