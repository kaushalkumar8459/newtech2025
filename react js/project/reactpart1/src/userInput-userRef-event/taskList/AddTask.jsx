import { useState } from "react"

export const AddTask = ({ ArrayData, setArrayData }) => {
    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);

    function handleChange(event) {
        setTaskValue(event.target.value)
    }
    function handleReset() {
        setTaskValue("")
        setProgress(false)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            completed: Boolean(progress)
        }
        console.log(task);
        setArrayData([...ArrayData, task])
        handleReset()
    }
    function handleSelect(event) {
        setProgress(event.target.value)
    }

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <label htmlFor="addTask">Add Task</label> <br />
                <input type="text" onChange={handleChange} id="addTask" name="addTask" placeholder="Enter Task" value={taskValue} />
                <select onChange={handleSelect} value={progress}>
                    <option value='false'>Pending</option>
                    <option value='true'>Completed</option>
                </select>

                <button type="button" onClick={handleReset}>Reset</button>
                <button type="submit">Save</button>
            </form>

            <h1>user input is :- {taskValue}</h1>
        </section>
    )
}
