// import TestData, { TestData2 } from "./test"

import TestData3 from "./test"

function App() {
  // return "hello";
  return (
    <>

      <h1>practise - 1:06:32</h1>
      <div id="parent">
        <h1 id="child_1">child 1 tag</h1>
        <h1 id="child_2">child 2 tag</h1>
      </div>
      <div id="parent_2">
        <h1 id="child_3">child 3 tag</h1>
        <h1 id="child_4">child 4 tag</h1>
      </div>
      {/* <TestData /> */}
      {/* <TestData2 /> */}
      <TestData3 />
    </>
  )
}

export default App