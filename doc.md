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
