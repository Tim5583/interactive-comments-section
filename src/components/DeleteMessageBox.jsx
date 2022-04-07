import classes from "./DeleteMessageBox.module.css";

const DeleteMessageBox = (props) => {
    return ( 
        <div className={classes.deleteBoxBody} style={{display: "none"}}>
            <div className={classes.deleteBox}>
                <p className={classes.deleteBoxHeader}>Delete Comment</p>
                <p className={classes.deleteBoxDescription}>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                <div className={classes.deleteBoxButtonContainer}>
                    <button className={classes.deleteBoxCanclebtn}>
                        NO, CANCEL
                    </button>
                    <button className={classes.deleteBoxDeletebtn}>
                        YES, DELETE
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default DeleteMessageBox;