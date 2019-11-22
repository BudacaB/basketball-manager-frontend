import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Team } from "../team.model";
import { TeamsService } from "../teams.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent implements OnInit, OnDestroy {
  team: Team;
  teamName: string;
  getTeamSubscription: Subscription;

  constructor(
    private teamService: TeamsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam() {
    this.getTeamSubscription = this.route.paramMap.subscribe(params => {
      this.teamName = params.get("teamName");
      this.teamService
        .getTeam(this.teamName)
        .subscribe(result => (this.team = result));
    });
  }

  ngOnDestroy(): void {
    if (this.getTeamSubscription) {
      this.getTeamSubscription.unsubscribe();
    }
  }
}
