import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Team } from "../team.model";
import { TeamsService } from "../teams.service";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent implements OnInit {
  team: Team;
  teamName: string;

  constructor(
    private teamService: TeamsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.teamName = params.get("teamName");
      this.teamService
        .getTeam(this.teamName)
        .subscribe(result => (this.team = result));
    });
  }
}
