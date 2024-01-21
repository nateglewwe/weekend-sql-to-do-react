import Card from '../Card/Card.jsx';
import Grid from '@mui/material/Grid'
import styles from './TaskList.module.css';

function TaskList (props) {

    return(
        <>
        <h1 className={styles.taskListBanner}>Task List</h1>
        <div className={styles.cardField}>
        <Grid container spacing='10px'>
            {(props.taskListArray).map((task, taskIndex) => {
                return (
                <Grid item xs={12} sm={4} md={3} lg={2} key={taskIndex}>
                <Card cardData={task} refreshTaskListCallback={props.refreshTaskListCallback}/>
                </Grid>
            )})}
        </Grid>
        </div>
        </>
    )
}

export default TaskList;