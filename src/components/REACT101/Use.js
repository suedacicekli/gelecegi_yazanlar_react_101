import React, { useState } from 'react'


function Use() {

    const [use, setUse] = useState({ name: "Sueda", surName: "Çiçekli" })

    return (
        <div>
            <h2>Kullanıcı:</h2>
            {use.name} {use.surName}
            <br />
            <br />
            <div>
                <button onClick={() => setUse((prev) => ({ ...prev, name: "Abdullah" }))}>İsmi Değiştir</button>
                {/* <button onClick={() => setUse({ ...use, name: "Abdullah" })}>İsmi Değiştir</button> */}
                <button onClick={() => setUse({ ...use, surName: "ÇİÇEKLİ <3" })}>Soyismi Değiştir</button>
            </div>
        </div >
    )
}

export default Use
