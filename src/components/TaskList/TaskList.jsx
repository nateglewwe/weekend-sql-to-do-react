import Card from '../Card/Card.jsx';
import './TaskList.css';
function TaskList (props) {

    return(
        <>
        <h1 className="taskListBanner">Task List</h1>
        <div className="cardField">
            {(props.taskListArray).map((task, taskIndex) => {
                return <Card key={taskIndex} cardData={task} refreshTaskListCallback={props.refreshTaskListCallback}/>
            })}
        </div>
        </>
    )
}

export default TaskList;