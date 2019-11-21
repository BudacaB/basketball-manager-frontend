import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ListTeamsComponent } from "./teams/list-teams/list-teams.component";
import { TeamsService } from "./teams/teams.service";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, ListTeamsComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
