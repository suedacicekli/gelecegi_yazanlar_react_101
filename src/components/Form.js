import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState(""); //başlangıç değerimde Sueda olsun , sonra sildim
    const [surName, setsurName] = useState("");
    //cinsiyet tanımını tutacak bir state hazırlıyoruz
    const [gender, setGender] = useState("1"); //başlangıç değeri kadın olsun
    return (
        <div>
            <div>
                <br />
                <div>İsim:</div>
                <input
                    placeholder="İsim"
                    value={name}
                    onChange={(event) => setName(event.target.value)} />
                <input
                    placeholder="Soyisim"
                    value={surName}
                    onChange={(event) => setsurName(event.target.value)} />
            </div>
            <br />
            <div>
                <div>Cinsiyet:</div>
                <select value={gender}
                    onChange={(event) => setGender(event.target.value)}>
                    <option value="0">Kadın</option>
                    <option value="1">Erkek</option>
                </select>
            </div>

            <hr />
            <div>
                İsim:
                <strong>{name} {surName}</strong>
            </div>
            <div>
                Cinsiyet:
                <strong>{gender === '0' ? 'Kadın' : 'Erkek'}</strong>
            </div>

        </div>
    )
}

export default Form
