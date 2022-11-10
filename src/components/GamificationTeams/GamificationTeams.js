import './GamificationTeams.css'
let teams = require('../../assets/teams.json');
function GamificationTeams(){
    return (
        <div>{teams.team1.members[0]}</div>
    )
}

console.log(teams.team1)
export default GamificationTeams;