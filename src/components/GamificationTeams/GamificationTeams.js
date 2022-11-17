import './GamificationTeams.css'
function GamificationTeams(props) {
    const closePopup = () => {
        props.updatePopupVisibility("disabled");
    }
    return (
        <div className={`popup-main ${props.popupVisible}`}>
            <button className='popup-close' onClick={closePopup}>Close</button>
            <div className='popup-item-container'>
                    <div className='popup-item'>
                        <p className='p-title'>{props.teamName}</p>
                        <p className='p-title'>{props.teamScore} points</p>
                    </div>
                    {/* From here on: all categories and their respective scores, probably in their own
                    react containers */}
                    <div className='popup-item'>
                        <p>Category 1</p>
                        <p>{props.teamScore - 7} points</p>
                    </div>
                    <div className='popup-item'>
                        <p>Category 2</p>
                        <p>7 points</p>
                    </div>

            </div>
        </div>
    )
}


export default GamificationTeams;