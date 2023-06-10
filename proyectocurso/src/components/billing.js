


import React, { useState } from "react";

function UserBilling({ name , lastName, email}) {

    function codeClient () {
        let min = 1000;
        let max = 10000;
        let num = Math.floor(Math.random() * (max - min + 1)) + min
        return num
    };

    return (
        <div>
            <div className="formContainer text_modal">
                
                    <p>Nombre: {name} </p>

                    <p>Apellidos: {lastName} </p>

                    <p>Email: {email} </p>
     
                    <p>Número de comprobante: {codeClient()} </p>

            </div>
        </div>
    )

}

export default UserBilling
