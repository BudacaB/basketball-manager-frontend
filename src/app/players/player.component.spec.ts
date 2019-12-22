import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PlayerComponent } from "./player.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Player } from "./player.model";
import { ActivatedRouteStub } from "src/testing/activated-route-stub";
import { createComponent, NO_ERRORS_SCHEMA } from "@angular/compiler/src/core";

describe("PlayerComponent", () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerComponent],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

describe("when nagivating to a player", () => {
  let selectedPlayer: Player;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(async(() => {
    activatedRoute.setParamMap({ lastName: selectedPlayer.lastName });
    createComponent();
  }));

  it("should get the player name", () => {
    expect(document.getElementById("name").textContent).toContain(
      selectedPlayer.lastName
    );
  });
});
