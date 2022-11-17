import './GamificationHome.css'
import GamificationTeams from '../GamificationTeams/GamificationTeams';
import { useState, useEffect } from 'react';
import axios from 'axios';

function GamificationHomes() {

    const teams = [
        {
            teamName: "Team 1",
            teamScore: 20,
            teamId: "0"
        },
        {
            teamName: "Team 2",
            teamScore: 12,
            teamId: "1"
        },
        {
            teamName: "Team 3",
            teamScore: 15,
            teamId: "2"
        },
        {
            teamName: "Team 4",
            teamScore: 18,
            teamId: "3"
        },
        {
            teamName: "Team 5",
            teamScore: 13,
            teamId: "4"
        },
        {
            teamName: "Team 6",
            teamScore: 11,
            teamId: "5"
        },
        {
            teamName: "Team 7",
            teamScore: 16,
            teamId: "6"
        },
        {
            teamName: "Team 8",
            teamScore: 18,
            teamId: "7"
        },
        {
            teamName: "Team 9",
            teamScore: 13,
            teamId: "8"
        },
        {
            teamName: "Team 10",
            teamScore: 12,
            teamId: "9"
        }
    ]
    const getTeams = async () => {
        await axios
            .get("http://localhost:4000/teams")
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                if (err) {
                    console.error(err);
                }
            })
    }
    const updatePopupVisibility = (visiblity) => {
        setPopupVisible(visiblity);
    }
    const openTeamView = (e) => {
        let selectedTeam = e.target.id;
        setTeamName(teams[selectedTeam].teamName);
        setTeamScore(teams[selectedTeam].teamScore);
        setPopupVisible("enabled");
    };
    const [teamName, setTeamName] = useState(teams[0].teamName);
    const [teamScore, setTeamScore] = useState(teams[0].teamScore);
    const [popupVisible, setPopupVisible] = useState("disabled");
    const [teamsArray, setTeamsArray] = useState([]);


    useEffect(() => {
        const getTeamData = async () => {
            const teamsData = await axios("http://localhost:4000/teams",);
            setTeamsArray(teamsData.data);
        }
        getTeamData();
    }, [])
    return (
        <div className="GameDiv">
            <h4>Solera Teams, Bootcamp 4</h4>{JSON.stringify(teamsArray)}
            <button className="score-wrapper">
                {teams.map(team =>
                    <div className="score-box" onClick={(e) => openTeamView(e)} id={team.teamId} key={team.teamName}>
                        <p>{team.teamName}</p>
                        <h1>{team.teamScore}</h1>
                    </div>
                )}
            </button>
            <div className='team-view'>
                <GamificationTeams teamName={teamName} teamScore={teamScore} popupVisible={popupVisible} updatePopupVisibility={updatePopupVisibility} />
            </div>
        </div>
    )
}


export default GamificationHomes;