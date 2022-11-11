import './GamificationHome.css'
import GamificationTeams from '../GamificationTeams/GamificationTeams';
import { useState } from 'react';


function GamificationHomes() {
    const teams = [
        {
            teamName: "team1",
            teamScore: 20,
            teamId:"0"
        },
        {
            teamName: "team2",
            teamScore: 12,
            teamId:"1"
        },
        {
            teamName: "team3",
            teamScore: 15,
            teamId:"2"
        },
        {
            teamName: "team4",
            teamScore: 18,
            teamId:"3"
        },
        {
            teamName: "team5",
            teamScore: 13,
            teamId:"4"
        },
        {
            teamName: "team6",
            teamScore: 11,
            teamId:"5"
        },
        {
            teamName: "team7",
            teamScore: 16,
            teamId:"6"
        },
        {
            teamName: "team8",
            teamScore: 18,
            teamId:"7"
        },
        {
            teamName: "team9",
            teamScore: 13,
            teamId:"8"
        },
        {
            teamName: "team10",
            teamScore: 12,
            teamId:"9"
        }
    ]
    function openTeamView(event) {
        let selectedTeam = event.target.id;
        setTeamName(teams[selectedTeam].teamName);
        setTeamScore(teams[selectedTeam].teamScore)
    };
    const [teamName, setTeamName] = useState(teams[0].teamName);
    const [teamScore, setTeamScore] = useState(teams[0].teamScore)
    return (
        <div className="GameDiv">
            <div className="score-wrapper">
                {teams.map(team =>
                    <div className="score-box" onClick={openTeamView} id={team.teamId} key={team.teamName}>
                        {team.teamName}<br />
                        {team.teamScore}
                    </div>
                )}
            </div>
            <div className='team-view'>
                <GamificationTeams teamName={teamName} teamScore={teamScore} />
            </div>
        </div>
    )
}


export default GamificationHomes;