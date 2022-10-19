import React, { useState, useEffect } from "react";


function Counter() {

    const [count, setCount] = useState(0)
    const [value, setValue] = useState(1)

    useEffect(() => {
        console.log("Bir state değişti")
    })

    //component ilk kez value değerine geçtiği anda bunu yakalamak isteyebiliriz.

    useEffect(() => {
        console.log("Component mount edildi")
    }, []) // arrayin içinin boş olması component mount edildiğinde bu anı yakalamak istediğimizi belirtiriz.

    // şimdi ise count değiştiğinde bilgi almak istediğimi söylüyorum
    useEffect(() => {
        console.log("Count veya value değeri değişti")
    }, [count, value])
    return (
        <div>
            <h1>{count}</h1>
            {/* <button onClick={() => setCount(count - value)}>Azalt</button> */}
            <button onClick={() => setCount((prev) => prev + value)}>Arttır</button>
            {/* <button onClick={() => setCount(count + value)}>Arttır</button> ikiside aynı işi yapıyor*/}
            <hr />
            <div>Arttırma: +{value}</div>

            <button onClick={() => setValue(1)}>+1</button>
            <button onClick={() => setValue(3)}>+3</button>
            <button onClick={() => setValue(10)}>+10</button>


        </div>
    )
}

export default Counter
