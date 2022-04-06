import classes from "./CardInfo.module.css";
// import avatar1 from "../../images/avatars/image-amyrobson.png";
// import replyIcon from "../../images/icon-reply.svg";

const CardInfo = ({cardata, currentUser, onComment}) => {

    const {content, createdAt, user: {username, image: {webp}}} = cardata;
    
    return ( 
        <div className={classes.cardInfoContainer}>
            <div className={classes.cardHeader}>
                <div className={classes.cardHeaderText}>
                    <img src={webp} alt="" className={classes.profilePicture}/>
                    <p>{username}</p>
                    {username === currentUser ? <p className={classes.badge}>You</p> : null}
                    <p>{createdAt}</p>
                </div>
                <div className={classes.cardHeaderBtns}>
                    {username === currentUser ? <>
                        <button className={classes.btndelete}><img src="images/icon-delete.svg" alt="" className={classes.btnIcon}/>Delete</button>
                        <button className={classes.btn}><img src="images/icon-edit.svg" alt="" className={classes.btnIcon}/>Edit</button>
                        </> : 
                        <button className={classes.btn} onClick={onComment}><img src="images/icon-reply.svg" alt="" className={classes.btnIcon}/>Reply</button>
                    }

                </div>
            </div>
            <div className={classes.cardText}>
                {content}
            </div>
        </div>
     );
}

export default CardInfo;
