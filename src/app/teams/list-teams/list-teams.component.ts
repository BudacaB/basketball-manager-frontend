import { Component, OnInit, OnDestroy } from "@angular/core";
import { Team } from "./team.model";
import { TeamsService } from "../teams.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-list-teams",
  templateUrl: "./list-teams.component.html",
  styleUrls: ["./list-teams.component.css"]
})
export class ListTeamsComponent implements OnInit, OnDestroy {
  team: Team;
  getTeamSubscription: Subscription;

  constructor(private teamService: TeamsService) {}

  ngOnInit() {
    this.getTeam();
  }

  getTeam() {
    this.getTeamSubscription = this.teamService
      .getTeam("Lakers")
      .subscribe(result => (this.team = result));
  }

  ngOnDestroy(): void {
    if (this.getTeamSubscription) {
      this.getTeamSubscription.unsubscribe();
    }
  }
}
