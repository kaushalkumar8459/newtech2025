import { useState } from "react";

const ArrayMultiUpdate = () => {
    const [ArrayData, setArrayData] = useState([
        { id: 1, title: "Learn React Hooks", completed: false },
        { id: 2, title: "Build todo app", completed: true },
        { id: 3, title: "Style dashboard", completed: false }
    ])
    const [show, setShow] = useState(false);
    // ways 1:-
    // return (<>
    //     <h1>Action Item</h1>
    //     <ul>
    //         // if no return than use () inplace of { }
    //         {ArrayData.map((task) => {
    //             return <li>
    //                 <span> {task.id} - {task.title}</span>
    //                 <button> Action </button>
    //             </li>
    //         }
    //         )}
    //     </ul>
    // </>)


    //  ways 2:- using destructuring []

    function deleteRecord(id) {
        setArrayData(ArrayData.filter((data) => data.id != id))
    }

    function toggle(isShow) {
        // console.log(isShow);
        setShow(!isShow)
        console.log(show);

    }

    return (<>
        <h1>Action Item</h1>

        <ul>
            <button onClick={() => { toggle(show) }}>Toggle</button>

            {/* if no return than use () inplace of { } */}
            {show && ArrayData.map(({ id, title, completed }) => {
                return <li key={id} className={completed ? "" : ""}>
                    <span> {id} - {title}</span>
                    <button onClick={() => { deleteRecord(id) }}> Action </button>
                </li>
            }
            )}
        </ul>
    </>)
}
export default ArrayMultiUpdate;