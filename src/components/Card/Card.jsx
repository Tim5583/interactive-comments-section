import Vote from "./Vote";
import classes from "./Card.module.css";
import CardInfo from "./CardInfo";

const Card = (props) => {
    const {score, id} = props.cardata;

    const style = {
        margin: props.isreply ? "0" : "auto",
    }

    return (
        <div className={classes.card} style={style}>
            <Vote score={score} id={id}/> 
            <CardInfo cardata={props.cardata} currentUser={props.currentUser}/>
        </div>
     );
}
 
export default Card;