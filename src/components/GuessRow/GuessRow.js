import GuessPegs from "../GuessPegs/GuessPegs"
import GuessScore from "../GuessScore/GuessScore"
const GuessRow = (props) => {
    return (
        <div className= "component">
            GuessRow {props.rowNum}
            <GuessPegs />
            <GuessScore/>
        </div>
    )
}

export default GuessRow;