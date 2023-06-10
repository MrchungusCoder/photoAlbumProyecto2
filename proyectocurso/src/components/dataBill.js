

import React, { useState } from "react";

function DataBill({ onFormSubmit }) {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      onFormSubmit(name, lastName, email);
    };

    return (
            <form className="formContainer text_modal" onSubmit={handleSubmit}>
                <label className="labelStyle">Nombres:
                <input type="text" name="name" className="inputStyle" required
                value={name} onChange={(e) => setName(e.target.value)}/>
                </label>

                
                <label className="labelStyle">Apellidos:
                <input type="text" name="lastName" className="inputStyle" required
                 value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </label>

                <label className="labelStyle">Dirección de domicilio:
                <input type="text" name="emailUser" className="inputStyle" required
                value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>

                <br />
                <button type="submit" className="submitBtn" >Enviar datos</button>
            </form>
    )

}

export default DataBill

