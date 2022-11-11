import './GamificationTeams.css'
function GamificationTeams(props){
    return (
        <div className='popup-body'>
            <div className='popup-main'></div>
            {props.teamName}<br/>{props.teamScore}
        </div>
    )
}


export default GamificationTeams;