import './GamificationHome.css'
//import GamificationTeams from './components/GamificationTeams/GamificationTeams';
function GamificationHomes(){
    return (
        <div className="score-wrapper">
            <div className="score-box" onClick={openTeamView} id="team1">
                Team Name<br/>
                Score
            </div>
        </div>
    )
}

function openTeamView(event){
    console.log(event.target.id);
};
export default GamificationHomes;