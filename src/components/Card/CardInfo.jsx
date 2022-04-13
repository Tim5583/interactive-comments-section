import { useState } from "react";
import classes from "./CardInfo.module.css";


const CardInfo = ({cardata, currentUser, onReply, onDelete, onUpdate}) => {

    const {content, createdAt, user: {username, image: {webp}}, id, replyingTo} = cardata;
    const [isEdit, setIsEdit] = useState(false);
    const [message, setMessage] = useState(content);

    const updateData = (e) => {
        e.preventDefault();
        onUpdate(id, message);
        setIsEdit(false)
    };
    
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
                        <button className={classes.btndelete} onClick={() => onDelete(cardata.id)}><img src="images/icon-delete.svg" alt="" className={classes.btnIcon}/>Delete</button>
                        <button className={classes.btn} onClick={() => setIsEdit(prev => !prev)}><img src="images/icon-edit.svg" alt="" className={classes.btnIcon}/>Edit</button>
                        </> : 
                        <button className={classes.btn} onClick={onReply}><img src="images/icon-reply.svg" alt="" className={classes.btnIcon}/>Reply</button>
                    }

                </div>
            </div>
            <div className={classes.cardText}>
                {isEdit ? 
                    <form onSubmit={updateData}>
                        <textarea 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)}>
                        </textarea>
                        <button>UPDATE</button>
                    </form>
                        : 
                    <>{replyingTo ? <span className={classes.replyto}>@{replyingTo} </span> : null}{content}</>
                }
            </div>
        </div>
     );
}

export default CardInfo;
