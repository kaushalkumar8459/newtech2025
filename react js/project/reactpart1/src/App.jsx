import Footer from "./userInput-userRef-event/footer/Footer"
import Header from "./userInput-userRef-event/header/Header"
import TaskList from "./userInput-userRef-event/taskList/TaskList"
import { AddTask } from "./userInput-userRef-event/taskList/AddTask";
import "./App.css";
import { useState } from "react";

const App = () => {

  const [ArrayData, setArrayData] = useState([
    // { id: 1, name: "Learn React Hooks", completed: false },
    // { id: 2, name: "Build todo app", completed: true },
    // { id: 3, name: "Style dashboard", completed: false }
  ])


  return (<>
    <Header header='Header' logo="Logo" />
    <AddTask ArrayData={ArrayData} setArrayData={setArrayData} />
    <TaskList ArrayData={ArrayData} setArrayData={setArrayData} />
    <Footer footer='Footer' />
  </>)
}

export default App