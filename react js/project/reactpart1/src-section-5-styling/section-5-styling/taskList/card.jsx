import { useState } from 'react'
import './card'
import style from "./card.module.css";
const Card = ({ task, deleteRecord }) => {
    const [show, setShow] = useState();

    const styles = {
        color: 'green',
        border: '2px solid',
        borderColor: show ? "red" : "green"
    }
    return (

        <div className={`taskSection ${style.title}`}>
            <li style={{ color: "red", border: '2px solid green' }} className={`taskCard ${task.completed ? "" : ""}`}>
                <span className='taskList' style={styles}> {task.id} - {task.title}</span>
                <button onClick={() => { deleteRecord(task.id) }}> Action </button>
            </li>

        </div>

    )
}
export default Card;