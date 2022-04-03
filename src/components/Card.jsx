import Vote from "./Vote";
import classes from "./Card.module.css";
import CardInfo from "./CardInfo";

const Card = (props) => {
    const {score} = props.cardata;
    console.log(props.isreply)

    const style = {
        margin: props.isreply ? "0" : "auto",
    }

    return (
        <div className={classes.card} style={style}>
            <Vote score={score}/> 
            <CardInfo cardata={props.cardata}/>
        </div>
     );
}
 
export default Card;