import classes from "./Vote.module.css";

const Vote = (props) => {
    const {score, id, onVoteChange} = props;

    return (
        <div className={classes.voteContainer}>
            <button className={classes.incrementButton} 
                    onClick={() => onVoteChange(id, "up")}>
                <img src="images/icon-plus.svg" alt=""/>
            </button>
            <p className={classes.votesNumber}>{score}</p>
            <button className={classes.decrementButton} 
                    onClick={() => onVoteChange(id, "down")}>
                <img src="images/icon-minus.svg" alt="" />
            </button>
        </div>
    );
}

export default Vote;
