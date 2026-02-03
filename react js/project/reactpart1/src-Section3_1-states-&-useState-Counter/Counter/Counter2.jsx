// using setState method
import { useState } from "react";

const Counter2 = () => {
    const [countValue, setCountValue] = useState(0);
    function increaseCountBy3(params) {
        // setCountValue(countValue + 1);
        // setCountValue(countValue + 1);
        // setCountValue(countValue + 1);

        setCountValue((countValue) => countValue + 1)
        setCountValue((countValue) => countValue + 1)
        setCountValue((countValue) => countValue + 1)
    }
    function decreaseCountBy2() {
        setCountValue((countValue) => countValue - 1)
        setCountValue((countValue) => countValue - 1)
    }
    function resetCount() {
        setCountValue(0);
    }

    return (<>
        <h1>{countValue}</h1>
        <button onClick={increaseCountBy3}>Increase by 3</button>
        <button onClick={decreaseCountBy2}>Decrease by 2</button>
        <button onClick={resetCount}>Reset</button>
    </>)
}
export default Counter2;