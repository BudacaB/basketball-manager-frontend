import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { ListTeamsComponent } from "./teams/list-teams/list-teams.component";
import { TeamsService } from "./teams/teams.service";
import { HomeComponent } from "./home/home.component";
import { TeamComponent } from "./teams/team-detail/team.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "team/:teamName", component: TeamComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListTeamsComponent,
    HomeComponent,
    TeamComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
