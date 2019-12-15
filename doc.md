### Todos:

- Check angular.io docs - read on modules
- Check FE-BE diagram
- Check FE structure - code written
- Make another BE endpoint for all teams -> team controller
- New method in teamService - getAllTeams() -> replace team in controller
  - Observable of array of team
- Render all teams - ngFor
  - title h1
  - list players
  - (bootstrap lovin')
- Separate team view vs team list view
- Player pics, team logo, ball pic -> public S3 bucket -> use in db init script
  - /bucketUrl/teamName/playerName
  - /bucketUrl/team.png etc.

---

- show all player details -> player component
  - bootstrap format / styling
- use angular built-in pipes - use currency pipe for salary
- create enum object de tipul player position
- color code stamina, speed, strength https://getbootstrap.com/docs/4.3/components/badge/
  - smaller than 80 red
  - between 81 and 90 orange
  - between 91 and 100 green
- make bootstrap navbar - use ball png as navbar logo

---

- nice to have: add collections to db script, either separate method or add...then add docs
- functionalities:
  - start game
    - endpoint - receives the game name and selected team as arguments
    - make collection gameState - stores game data like game name, selected team

---

FE:

- new component for game setup - game-starter
- render in home within the team list
- install NgRx
- 2 props:
  - selectedTeam (by way of input from parent team list)
    https://angular.io/guide/component-interaction
  - gameName (as text field)
- start game button -> calls function 'startGame'
- component takes the 2 props - makes new game obj
- save this obj in NgRx store locally
- write test that guarantees that when getAllGames() is called, it calls the method from the API - https://angular.io/guide/testing - Testbed.get

BE:

- make new controller - game controller / game service
- make game model - json obj - game name, team, creation date/time (of server, not FE)
- uses mongo db - collection gameState
- write new entry with game data
- model classes -> change names to blablaModel
- ReceivedGame -> GameViewModel
- For DB -> GameDataModel
- StartGame endpoint -> GameState endpoint
- PostgreSQL for the game state
