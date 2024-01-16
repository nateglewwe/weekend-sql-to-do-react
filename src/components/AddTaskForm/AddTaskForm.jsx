import axios from 'axios';
import {useState} from 'react';
import './AddTaskForm.css';

function AddTaskForm (props) {

    const [taskValue, setTaskValue] = useState('')

    function submitTaskForm(event) {
        event.preventDefault();

        //pakage data
        let newTask = {task: taskValue};

        axios.post('/api/todo', newTask)
        .then((response) => {
            setTaskValue('');
            props.refreshTaskListCallback();
        })
        .catch((err) => {
            console.error('ERROR in client POST:', err);
        });
    };

    return (
        <div className="formField">
        <h1>Add A Task!</h1>
        <form onSubmit={submitTaskForm}>
            <label>Task:
                <input id="taskInput" placeholder="Fight the gods" onChange={(event) => setTaskValue(event.target.value)} value={taskValue}/>
            </label>
            <button type="submit">Add</button>
        </form>
        </div>
    )
}

export default AddTaskForm;