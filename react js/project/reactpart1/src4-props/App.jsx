import Footer from "./section-4-ComponnetAndProps/footer/footer"
import Header from "./section-4-ComponnetAndProps/header/header"
import { PropsChildren } from "./section-4-ComponnetAndProps/props/propsChildren"
import TaskList from "./section-4-ComponnetAndProps/taskList/TaskList"
import "./App.css";
import { PropsParent } from "./section-4-ComponnetAndProps/props/PropsParent";
const App = () => {
  return (<>
    {/* <Header header='Header' logo="Logo" />
    <TaskList />
    <Footer footer='Footer' /> */}

    <PropsParent />
  </>)
}

export default App