import React,{useState,useMemo} from 'react';
function UseMemo(){
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const expensiveCalculation = useMemo(() => {
        console.log("Calculating...");
        return count * 2;
    }, [count]);
    return(
        <div>
         <h2>UseMemo Example</h2>
            <p>Count: {count}</p>
            <p>Expensive Calculation: {expensiveCalculation}</p>
            <p>Text: {text}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <input type="text" placeholder="Type Something..." onChange={(e) => setText(e.target.value)} />
        </div>
    );
}
export default UseMemo;