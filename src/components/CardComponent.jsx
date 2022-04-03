import classes from "./CardComponent.module.css";
import Card from "./Card";

const CardComponent = ({cardata}) => {
    const {score, replies} = cardata;
    console.log(replies && "hello")
    replies.forEach(item => console.log(item))

    return (

        <>
        <Card cardata={cardata} isreply={false}/>

        {replies && (
             <div className={classes.cardReply}>
                <div className={classes.verticalLine}></div>
                <div className={classes.replyContainer}>
                    <Card cardata={cardata} isreply={true}/>
                    
                    {replies.forEach(item => <h1>Hello</h1>)}
                </div>
            </div>
        )}
        </>
     );
}
 
export default CardComponent;