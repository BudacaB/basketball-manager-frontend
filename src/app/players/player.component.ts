import { Component, OnInit } from "@angular/core";
import { PlayersService } from "./players.service";
import { ActivatedRoute } from "@angular/router";
import { Player } from "./player.model";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {
  player: Player;
  playerLastName: string;

  constructor(
    private playerService: PlayersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.playerLastName = params.get("playerName").split(" ")[1];
      this.playerService
        .getPlayer(this.playerLastName)
        .subscribe(result => (this.player = result));
    });
  }
}
