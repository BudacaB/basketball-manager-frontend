import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ListTeamsComponent } from "./teams/list-teams/list-teams.component";
import { TeamsService } from "./teams/teams.service";

@NgModule({
  declarations: [AppComponent, ListTeamsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
