import React, { useState } from 'react'

function Colors() {

    const [colors, setColors] = useState(["Kırmızı ", "Yeşil ", "Mavi"]);
    const handleClick = () => {
        //setColors([...colors, "Gri"]); // önceki değerleri korumak için ...colors olmalı
        // setColors([...colors, Math.random()])  // mathrandom ile de random sayı ekleneyebiliriz.
        //burada previous state ile deneyeceğim : 
        setColors((prev) => [...prev, "Gri"]);
    };
    return (

        <div>
            <h2>Renkler</h2>
            {
                colors.map((color, i) => (
                    <div key={i}>{color}</div>
                ))}
            <button onClick={handleClick}>Renkler ekle</button>
        </div>
    )
}

export default Colors
