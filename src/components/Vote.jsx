import classes from "./Vote.module.css";
import plueIcon from "../images/icon-plus.svg"
import minusIcon from "../images/icon-minus.svg"

const Vote = (props) => {
    const {score} = props;

    return (
        <div className={classes.voteContainer}>
            <button className={classes.incrementButton}><img src={plueIcon} alt="" /></button>
            <p className={classes.votesNumber}>{score}</p>
            <button className={classes.decrementButton}><img src={minusIcon} alt="" /></button>
        </div>
    );
}
 
export default Vote;