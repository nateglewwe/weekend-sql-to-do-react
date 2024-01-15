import {useState} from 'react';
import AddTaskForm from '../AddTaskForm/AddTaskForm.jsx'

function App () {
  let [taskList, setTaskList] = useState([])
  let refreshTaskList = () => {
    axios.get('/api/todo')
    .then((response) => {
      console.table(response.data);
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
      <h1>TO DO APP</h1>
      <AddTaskForm refreshTaskListCallback={refreshTaskList}/>
    </div>
  );

}

export default App
