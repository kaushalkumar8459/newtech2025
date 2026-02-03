
// const TestData = () => {
//     return (
//         <div>
//             <h1>
//                 Hello
//             </h1>
//             <p>
//                 Paragraph
//             </p>
//         </div>
//     );
// }
// export default TestData;

import { Component } from "react";


export const TestData2 = () => {
    return (
        <div>test</div>
    )
}


// export default class TestData2 extends Component {
//     render() {
//         return (<>hello</>)
//     }
// }

const TestData3 = () => {
    const userName = "Ramu"
    return (<>
        <h1>My Name is {userName}</h1>
    </>)
}
export default TestData3;