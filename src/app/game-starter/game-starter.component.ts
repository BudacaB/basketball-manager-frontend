import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-game-starter",
  templateUrl: "./game-starter.component.html",
  styleUrls: ["./game-starter.component.css"]
})
export class GameStarterComponent implements OnInit {
  gameName: string;
  @Input() selectedTeam: string;

  constructor() {}

  onKey(event: any) {
    this.gameName = event.target.value;
  }

  startGame() {
    console.log(`${this.gameName} & ${this.selectedTeam}`);
  }

  ngOnInit() {}
}
