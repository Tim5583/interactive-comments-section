import { useState } from "react";
import classes from "./CommentSection.module.css";

const CommentSection = ({currentUser, currentUserProfilePic, onComment}) => {
    const [comment, setComment] = useState("");

    const sentdata = (e) => {
        e.preventDefault();
        onComment(comment)
        setComment("")
    };
    return ( 
        <form className={classes.form} onSubmit={sentdata}> 
            <img src={currentUserProfilePic} alt="" className={classes.profilePic}/>
            <textarea name="comment" id="comment" rows="4" placeholder="Add a comment.." 
                value={comment} 
                onChange={(e) => setComment(e.target.value)}>
            </textarea>
            <input type="submit" value="Send" className={classes.btn}/>
        </form>
     );
}
 
export default CommentSection;
