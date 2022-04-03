import classes from "./CardInfo.module.css";
import avatar1 from "../images/avatars/image-amyrobson.png";

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
                    reply
                </div>
            </div>
            <div className={classes.cardText}>
                {content}
            </div>
        </div>
     );
}

export default CardInfo;