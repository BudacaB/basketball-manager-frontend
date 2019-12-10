import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreRouterConnectingModule } from "@ngrx/router-store";

import { AppComponent } from "./app.component";
import { ListTeamsComponent } from "./teams/list-teams/list-teams.component";
import { TeamsService } from "./teams/teams.service";
import { HomeComponent } from "./home/home.component";
import { TeamComponent } from "./teams/team-detail/team.component";
import { PlayerComponent } from "./players/player.component";
import { PlayersService } from "./players/players.service";
import { GameStarterComponent } from "./game-starter/game-starter.component";
import { appReducers } from "./store/reducers/app.reducers";
import { environment } from "../environments/environment";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "team/:teamName", component: TeamComponent },
  { path: "player/:playerName", component: PlayerComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListTeamsComponent,
    HomeComponent,
    TeamComponent,
    PlayerComponent,
    GameStarterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [TeamsService, PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
