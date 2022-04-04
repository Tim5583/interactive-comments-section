import classes from "./CardComponent.module.css";
import Card from "./Card/Card";

const CardComponent = ({cardata}) => {
    const {replies} = cardata;

    return (

        <>
        <Card cardata={cardata} isreply={false}/>

        {replies && (
             <div className={classes.cardReply}>
                <div className={classes.verticalLine}></div>
                <div className={classes.replyContainer}>            
                    {replies.map(item => <Card cardata={item} isreply={true} key={item.id}/>)}
                </div>
            </div>
        )}
        </>
     );
}

export default CardComponent;
