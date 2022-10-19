import React, { useState } from 'react'

function Form() {

    const [form, setForm] = useState({ name: "", surName: "", gender: "1" }); // {}bir obje gelsin
    const handleChange = (event) => {
        setForm((prev) => ({ ...prev, [event.target.value]: event.target.value }))
    }
    return (
        <div>
            <div>
                <br />
                <div>İsim:</div>
                <input
                    placeholder="İsim"
                    name='name'
                    value={form.name}
                    onChange={handleChange} />
                <input
                    placeholder="Soyisim"
                    name='surName'
                    value={form.surName}
                    onChange={handleChange} />
            </div>
            <br />
            <div>
                <div>Cinsiyet:</div>
                <select value={form.gender}
                    name="gender"
                    onChange={handleChange}>
                    <option value="0">Kadın</option>
                    <option value="1">Erkek</option>
                </select>
            </div>

            <hr />
            <div>
                İsim:
                <strong>{form.name} {form.surName}</strong>
            </div>
            <div>
                Cinsiyet:
                <strong>{gender === '0' ? 'Kadın' : 'Erkek'}</strong>
            </div>

        </div>
    )
}

export default Form
