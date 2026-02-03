// const Card = (props) => {
//     return (

//         <li key={props.task.id} className={props.task.completed ? "" : ""}>
//             <span> {props.task.id} - {props.task.title}</span>
//             <button onClick={() => { props.deleteRecord(props.task.id) }}> Action </button>
//         </li>


//     )
// }
// export default Card;

// Writing props each time is not look good, so destructure the value
const Card = ({ task, deleteRecord }) => {
    return (

        <li className={task.completed ? "" : ""}>
            <span> {task.id} - {task.title}</span>
            <button onClick={() => { deleteRecord(task.id) }}> Action </button>
        </li>


    )
}
export default Card;