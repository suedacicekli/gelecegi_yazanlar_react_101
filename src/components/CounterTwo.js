import React, { useState, useEffect } from "react";


function Counter() {

    const [count, setCount] = useState(0)
    const [value, setValue] = useState(1)


    useEffect(() => {
        let abdullah = setInterval(() => {
            console.log("setInterval başa döndü");
            setCount((prev) => prev + 1)
        }, 1000);


        return () => clearInterval(abdullah);
    }, [])


    return (
        <div>
            <h1>{count}</h1>

            <button onClick={() => setCount((prev) => prev + value)}>Arttır</button>
            <hr />
            <div>Arttırma: +{value}</div>

            <button onClick={() => setValue(1)}>+1</button>
            <button onClick={() => setValue(3)}>+3</button>
            <button onClick={() => setValue(10)}>+10</button>


        </div>
    )
}

export default Counter
