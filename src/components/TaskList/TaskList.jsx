import Card from '../Card/Card.jsx';
import styles from './TaskList.module.css';
function TaskList (props) {

    return(
        <>
        <h1 className={styles.taskListBanner}>Task List</h1>
        <div className={styles.cardField}>
            {(props.taskListArray).map((task, taskIndex) => {
                return <Card key={taskIndex} cardData={task} refreshTaskListCallback={props.refreshTaskListCallback}/>
            })}
        </div>
        </>
    )
}

export default TaskList;