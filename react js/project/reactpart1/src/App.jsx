import Footer from "./section-5-styling/footer/Footer"
import Header from "./section-5-styling/header/Header"
import TaskList from "./section-5-styling/taskList/TaskList"
import "./App.css";

const App = () => {
  return (<>
    <Header header='Header' logo="Logo" />
    <TaskList />
    <Footer footer='Footer' />
  </>)
}

export default App