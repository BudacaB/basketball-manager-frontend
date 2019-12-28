import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { GameStarterComponent } from "./game-starter.component";

describe("GameStarterComponent", () => {
  let component: GameStarterComponent;
  let fixture: ComponentFixture<GameStarterComponent>;
  const initialState = { game: {} };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
      declarations: [GameStarterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
