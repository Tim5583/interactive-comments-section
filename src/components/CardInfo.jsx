import classes from "./CardInfo.module.css";
import avatar1 from "../images/avatars/image-amyrobson.png";

const CardInfo = (props) => {
    return ( 
        <div className={classes.cardInfoContainer}>
            <div className={classes.cardHeader}>
                <div className={classes.cardHeaderText}>
                    <img src={avatar1} alt="" className={classes.profilePicture}/>
                    <p>amyorobson</p>
                    <p>1 month ago</p>
                </div>
                <div className={classes.cardHeaderBtns}>
                    reply
                </div>
            </div>
            <div className={classes.cardText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis laudantium vitae ducimus nam deserunt similique corrupti cumque maxime soluta rerum asperiores ipsam perspiciatis, minus, explicabo pariatur hic vero a!
            </div>
        </div>
     );
}

export default CardInfo;