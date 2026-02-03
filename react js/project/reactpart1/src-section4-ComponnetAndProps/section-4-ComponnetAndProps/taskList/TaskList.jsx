import { useState } from "react";
import Card from "./card";

const TaskList = () => {
    const [ArrayData, setArrayData] = useState([
        { id: 1, title: "Learn React Hooks", completed: false },
        { id: 2, title: "Build todo app", completed: true },
        { id: 3, title: "Style dashboard", completed: false }
    ])

    const [show, setShow] = useState(false);

    function deleteRecord(id) {
        setArrayData(ArrayData.filter((data) => data.id != id))
    }

    function toggle(isShow) {
        setShow(!isShow)
        console.log(show);

    }
    return (<>
        <h1>Action Item</h1>

        <ul>
            <button onClick={() => { toggle(show) }}>Toggle</button>

            {show && ArrayData.map((task) =>
                (<Card task={task} key={task.id}  deleteRecord={deleteRecord} />)

            )}
        </ul>
    </>)
}
export default TaskList;