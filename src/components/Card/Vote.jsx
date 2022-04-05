import classes from "./Vote.module.css";
// import plueIcon from "../../images/icon-plus.svg"
// import minusIcon from "../../images/icon-minus.svg"

const Vote = (props) => {
    const {score, id} = props;

    return (
        <div className={classes.voteContainer}>
            <button className={classes.incrementButton}><img src="images/icon-plus.svg" alt="" /></button>
            <p className={classes.votesNumber}>{score}</p>
            <button className={classes.decrementButton}><img src="images/icon-minus.svg" alt="" /></button>
        </div>
    );
}
 
export default Vote;