import { Component, OnInit, OnDestroy } from "@angular/core";
import { PlayersService } from "./players.service";
import { ActivatedRoute } from "@angular/router";
import { Player } from "./player.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit, OnDestroy {
  player: Player;
  playerLastName: string;
  getPlayerSubscription: Subscription;

  constructor(
    private playerService: PlayersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer() {
    this.getPlayerSubscription = this.route.paramMap.subscribe(params => {
      this.playerLastName = params.get("playerName").split(" ")[1];
      this.playerService
        .getPlayer(this.playerLastName)
        .subscribe(result => (this.player = result));
    });
  }

  ngOnDestroy(): void {
    if (this.getPlayerSubscription) {
      this.getPlayerSubscription.unsubscribe();
    }
  }
}
