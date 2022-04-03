import Vote from "./Vote";
import classes from "./Card.module.css";
import CardInfo from "./CardInfo";

const Card = (props) => {
    return ( 
        <div className={classes.card}>
            <Vote /> 
            <CardInfo />
        </div>
     );
}
 
export default Card;