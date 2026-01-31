
// const Counter = () => {
//     let countValue = 1;
//     function increaseCount(params) {
//         console.log(countValue);
//         countValue += 1;
//     }


//     return (<>
//         <h1>{countValue}</h1>
//         <button onClick={increaseCount}>Increase</button>
//         <button >Decrease</button>
//     </>)
// }
// export default Counter;


// using setState method
import { useState } from "react";

const Counter = () => {
    const [countValue, setCountValue] = useState(0);
    function increaseCount(params) {
        console.log('increase value', countValue);
        setCountValue(countValue + 1);
    }
    function decreaseCount() {
        if (countValue > 0) {
            setCountValue(countValue - 1)
            console.log('decrease value', countValue);
        }
    }
    function resetCount() {
        setCountValue(0);
    }

    return (<>
        <h1>{countValue}</h1>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
    </>)
}
export default Counter;