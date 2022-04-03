import Vote from "./Vote";
import classes from "./Card.module.css";
import CardInfo from "./CardInfo";

const Card = ({cardata}) => {
    const {score} = cardata;

    return (

        <>
        <div className={classes.card}>
            <Vote score={score}/> 
            <CardInfo />
        </div>

        if (replies) {
             <div className={classes.cardReply}>
                <div className={classes.verticalLine}></div>
                <div className={classes.replyContainer}>
                    <div className={classes.cards}>
                        <Vote /> 
                        <CardInfo />
                    </div>
    
                    <div className={classes.cards}>
                        <Vote /> 
                        <CardInfo />
                    </div>
                </div>
            </div>
        }
        </>
     );
}
 
export default Card;