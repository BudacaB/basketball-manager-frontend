import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Mock } from "ts-mocks";
import { ListGamesComponent } from "./list-games.component";
import { GamesService } from "../games.service";
import { of } from "rxjs";

describe("ListGamesComponent", () => {
  let component: ListGamesComponent;
  let fixture: ComponentFixture<ListGamesComponent>;
  let mockGameService: Mock<GamesService>;

  beforeEach(async(() => {
    mockGameService = new Mock<GamesService>();
    mockGameService.setup(t => t.getGames).is(() => of(null));
    TestBed.configureTestingModule({
      declarations: [ListGamesComponent],
      providers: [
        { provide: GamesService, useValue: mockGameService.Object }
        // GamesService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call getAllGames on init", () => {
    const spyOnGetGames = spyOn(component, "getAllGames").and.callThrough();
    component.ngOnInit();
    expect(spyOnGetGames).toHaveBeenCalled();
  });
});
