import { useRef, useState } from "react";
import classes from "./CommentSection.module.css";
// import avatar from "../images/avatars/image-amyrobson.png"

const ReplySection = ({currentUser, currentUserProfilePic, onReply, replyto}) => {
    const [reply, setReply] = useState("");

    const sendReply = (e) => {
        e.preventDefault();
        onReply(replyto, reply)
        setReply("")
    };

    return ( 
        <form className={classes.form} onSubmit={sendReply}> 
            <img src={currentUserProfilePic} alt="" className={classes.profilePic}/>
            <textarea name="comment" id="comment" rows="4" placeholder="Add your message.." value={reply} onChange={(e) =>{setReply(e.target.value)}}></textarea>
            <input type="submit" value="Reply" className={classes.btn}/>
        </form>
     );
}
 
export default ReplySection;