import {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './App.module.css'
import AddTaskForm from '../AddTaskForm/AddTaskForm.jsx';
import TaskList from '../TaskList/TaskList.jsx';

function App () {
  let [taskList, setTaskList] = useState([])
  let refreshTaskList = () => {
    axios.get('/api/todo')
    .then((response) => {
      console.table(response.data);
      console.log(response.data);
      setTaskList(response.data);
    })
    .catch((err) => {
      console.error('ERROR in client GET:', err);
    });
  };

  //Initial load of component
  useEffect(() => {
    // body of effect
    console.log('Testing initial load of component');
    // api call
    refreshTaskList();
    }, []);
  
  return (
    <div>
      <h1 className={styles.banner}>TO DO APP</h1>
      <AddTaskForm refreshTaskListCallback={refreshTaskList}/>
      <TaskList taskListArray={taskList} refreshTaskListCallback={refreshTaskList}/>
    </div>
  );

}

export default App
