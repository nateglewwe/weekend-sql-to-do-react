import axios from 'axios';
import {useState} from 'react';
import styles from './Card.module.css';
import Button from '@mui/material/Button';

function Card (props) {

    function clickComplete(id) {
        
        //passing id number of specific card into update route
        axios.put(`/api/todo/${id}`)
        .then((response) => {
            props.refreshTaskListCallback();
        })
        .catch((err) => {
            console.error('ERROR in client PUT:', err);
        });
    }

    function clickDelete(id) {
        //event.preventDefault(); SAM THE TA SAID WE DIDN'T NEED THIS?

        //passing id number of specific card into delete route
        axios.delete(`/api/todo/${id}`)
        .then((response) => {
            props.refreshTaskListCallback();//THIS IS WORKING, NEEDS TWO ROUNDS OF PROPS.REFRESHTASKLISTCALLBACK TO ACCESS REFRESH FUNC IN APP.JSX THROUGH TASKLIST.JSX
        })
        .catch((err) => {
            console.error('ERROR in client DELETE:', err);
        });
    }

    return(
    props.cardData.completed===true ? 
        
        <div className={styles.cardCompleted}>
        <p>{props.cardData.task}</p>
            <div className={styles.buttonField}>
                <Button variant="contained" color="success" size="small" disabled onClick={() => clickComplete(props.cardData.id)}>✅Complete</Button>
                <Button variant="contained" color="error" size="small" onClick={() => clickDelete(props.cardData.id)}>Delete</Button>
            </div>
        </div>
    :
        <div className={styles.card}>
        <p>{props.cardData.task}</p>
            <div className={styles.buttonField}>
                <Button variant="contained" color="success" size="small" onClick={() => clickComplete(props.cardData.id)}>Complete</Button>
                <Button variant="contained" color="error" size="small" onClick={() => clickDelete(props.cardData.id)}>Delete</Button>
            </div>
        </div>
        
    );
};

export default Card;

//ORIGINAL CONDITIONAL IF STATEMENT, BEFORE SWITCHING TO TERNARY OPERATOR SYNTAX FOR CARD FUNCTION RETURN
// if (props.cardData.completed===true) {
//     return(
//         <div className={styles.cardCompleted}>
//         <p>{props.cardData.task}</p>
//             <div className={styles.buttonField}>
//                 <input type="button" value="✅Complete" disabled onClick={() => clickComplete(props.cardData.id)}/>
//                 <input type="button" value="Delete" onClick={() => clickDelete(props.cardData.id)}/>
//             </div>
//         </div>
//     );
// }
// return(
//     <div className={styles.card}>
//     <p>{props.cardData.task}</p>
//     <div className={styles.buttonField}>
//       <input type="button" value="Complete" onClick={() => clickComplete(props.cardData.id)}/>
//       <input type="button" value="Delete" onClick={() => clickDelete(props.cardData.id)}/>
//       </div>
//   </div>
// );