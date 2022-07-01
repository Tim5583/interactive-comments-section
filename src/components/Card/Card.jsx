import Vote from "./Vote";
import classes from "./Card.module.css";
import CardInfo from "./CardInfo";
import { useState } from "react";
import ReplySection from "../ReplySection";

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
    };

    return (
        <>
            <div className={classes.card} style={style}>
                <Vote score={score} id={id} onVoteChange={props.onVoteChange} /> 
                <CardInfo 
                    cardata={props.cardata} 
                    currentUser={props.currentUser[0]} 
                    onReply={addreply} 
                    onDelete={props.onDelete} 
                    onUpdate={props.onUpdate}
                />
            </div>
            { reply ? <ReplySection 
                        currentUser={props.currentUser[0]} 
                        currentUserProfilePic={props.currentUser[1]} 
                        onReply={props.onReply} 
                        replyto={props.cardata.replyingTo} 
                        replyUnder={props.cardata.user.username}/> 
                    : null}
        </>
     );
}
 
export default Card;
