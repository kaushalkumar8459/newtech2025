import './card'
const Card = ({ task, deleteRecord }) => {
    return (

        <li className={`taskCard ${task.completed ? "" : ""}`}>
            <span> {task.id} - {task.title}</span>
            <button onClick={() => { deleteRecord(task.id) }}> Action </button>
        </li>


    )
}
export default Card;