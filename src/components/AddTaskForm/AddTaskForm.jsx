import axios from 'axios';
import {useState} from 'react';
// import './AddTaskForm.css';

function AddTaskForm (props) {

    const [taskValue, setTaskValue] = useState('')

    function submitTaskForm(event) {
        event.preventdefault();

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
        <>
        <h1>Add A Task!</h1>
        <form onSubmit={submitTaskForm}>
            <label>Task:
                <input id="taskInput" placeholder="Fight the gods" onChange={(event) => setTaskValue(event.target.value)} value={taskValue}></input>
            </label>
            <button type="submit">Add</button>
        </form>
        </>
    )
}

export default AddTaskForm;