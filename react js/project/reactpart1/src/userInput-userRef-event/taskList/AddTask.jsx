import { useRef, useState } from "react"

export const AddTask = ({ ArrayData, setArrayData }) => {
    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);
    const TaskRef = useRef("testing");
    const countRef = useRef(0);


    function handleChange(event) {
        setTaskValue(event.target.value)
    }

    function handleRefChange() {
        console.log(TaskRef.current.value);
    }

    function handleReset() {
        setTaskValue("")
        setProgress(false)
        TaskRef.current.value = "";
    }

    function handleSubmit(event) {
        event.preventDefault()
        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            completed: Boolean(progress)
        }
        console.log(task);
        // ways 1:-
        setArrayData([...ArrayData, task])

        // // ways 2:-
        // setArrayData(ArrayData.concat(task))

        // // ways 3:-
        // const newArray = new Array(...ArrayData);
        // newArray.push(task);
        // setArrayData(newArray);


        handleReset()
    }
    function handleSelect(event) {
        setProgress(event.target.value)
    }


    function handleClick() {
        countRef.current++;
        console.log(countRef.current);
    }

    return (
        <section className="addTask">

            <button onClick={handleClick}>
                counter {countRef.current}
            </button>
            <hr />
            <form onSubmit={handleSubmit}>
                <label htmlFor="addTask">Add Task</label> <br />
                <input type="text" onChange={handleChange} id="addTask" name="addTask" placeholder="Enter Task" value={taskValue} />
                <input type="text" onChange={handleRefChange} id="addRefTask" name="addRefTask" placeholder="Enter Task for ref" ref={TaskRef} />

                <select onChange={handleSelect} value={progress}>
                    <option value='false'>Pending</option>
                    <option value='true'>Completed</option>
                </select>

                <button type="button" onClick={handleReset}>Reset</button>
                <button type="submit">Save</button>
            </form>

            <h1>user input is :- {taskValue}</h1>
            <h1>user input using ref :- {TaskRef.current?.value}</h1>

        </section>
    )




}
