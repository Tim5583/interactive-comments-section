import classes from "./CardInfo.module.css";
import avatar1 from "../../images/avatars/image-amyrobson.png";
import replyIcon from "../../images/icon-reply.svg";

const CardInfo = ({cardata}) => {

    const {content, createdAt, user: {username}} = cardata;
    return ( 
        <div className={classes.cardInfoContainer}>
            <div className={classes.cardHeader}>
                <div className={classes.cardHeaderText}>
                    <img src={avatar1} alt="" className={classes.profilePicture}/>
                    <p>{username}</p>
                    <p>{createdAt}</p>
                </div>
                <div className={classes.cardHeaderBtns}>
                    <button><img src={replyIcon} alt="" />Reply</button>
                </div>
            </div>
            <div className={classes.cardText}>
                {content}
            </div>
        </div>
     );
}

export default CardInfo;
