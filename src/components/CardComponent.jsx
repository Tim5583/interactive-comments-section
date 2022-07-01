import classes from "./CardComponent.module.css";
import Card from "./Card/Card";

const CardComponent = ({cardata, currentUser, onReply, onVoteChange, onDelete, onUpdate}) => {
    const {replies} = cardata;

    return (
        <>
            <Card cardata={cardata} isreply={false} currentUser={currentUser} onReply={onReply} onVoteChange={onVoteChange} onDelete={onDelete} onUpdate={onUpdate}/>

            {replies && (
                <div className={classes.cardReply}>
                    <div className={classes.verticalLine}></div>
                    <div className={classes.replyContainer}>            
                        {replies.map(item => 
                            <Card cardata={item} 
                                isreply={true} 
                                key={item.id} 
                                currentUser={currentUser} 
                                onReply={onReply} 
                                onVoteChange={onVoteChange} 
                                onDelete={onDelete} 
                                onUpdate={onUpdate}
                            />
                        )}
                    </div>
                </div>
            )}
        </>
     );
}

export default CardComponent;
