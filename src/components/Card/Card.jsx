import Vote from "./Vote";
import classes from "./Card.module.css";
import CardInfo from "./CardInfo";
import { useState } from "react";
import CommentSection from "../CommentSection";

const Card = (props) => {
    const {score, id} = props.cardata;
    const [reply, setReply] = useState(false)

    const style = {
        margin: props.isreply ? "0" : "auto",
    }

    const addreply = () => {
        setReply(prevVal => {
            const newVal = !prevVal;
            return newVal;
        })
        console.log("clicked")
    };

    return (
        <>
            <div className={classes.card} style={style}>
                <Vote score={score} id={id}/> 
                <CardInfo cardata={props.cardata} currentUser={props.currentUser[0]} onReply={addreply}/>
            </div>
            {reply ? <CommentSection currentUser={props.currentUser[0]} currentUserProfilePic={props.currentUser[1]} buttonText="Reply"/> : null}
        </>
     );
}
 
export default Card;