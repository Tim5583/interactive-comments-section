import classes from "./CardComponent.module.css";
import Card from "./Card/Card";

const CardComponent = ({cardata, currentUser, onReply}) => {
    const {replies} = cardata;

    return (

        <>
        <Card cardata={cardata} isreply={false} currentUser={currentUser} onReply={onReply}/>

        {replies && (
             <div className={classes.cardReply}>
                <div className={classes.verticalLine}></div>
                <div className={classes.replyContainer}>            
                    {replies.map(item => <Card cardata={item} isreply={true} key={item.id} currentUser={currentUser} onReply={onReply}/>)}
                </div>
            </div>
        )}
        </>
     );
}

export default CardComponent;
