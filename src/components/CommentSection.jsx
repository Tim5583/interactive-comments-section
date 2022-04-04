import classes from "./CommentSection.module.css";
import avatar from "../images/avatars/image-amyrobson.png"

const CommentSection = (props) => {
    return ( 
        <form className={classes.form}> 
            <img src={avatar} alt="" className={classes.profilePic}/>
            <textarea name="comment" id="comment" rows="4" placeholder="Add a comment.."></textarea>
            <input type="submit" value="Send" className={classes.btn}/>
        </form>
     );
}
 
export default CommentSection;