

import React, { useState } from "react";
import DataBill from "./dataBill";
import UserBilling from "./billing";

export function FormStructure() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleFormSubmit = (name, lastName, email) => {
      setName(name);
      setLastName(lastName);
      setEmail(email);
    };

    const[page, setPage] = useState(0);
    const Formtitles = ["Datos de facturación", "Resumen del pedido", "Pago realizado con Éxito!"];

    const PageDisplay = () => {
      if(page === 0){
        return <DataBill onFormSubmit={handleFormSubmit}/>
      }
      else if (page === 1) {
        return <UserBilling name={name} lastName={lastName} email={email}/>
      }
      else if (page===2){
        return
      }
    }

    console.log(page)
    
    const btnDisplay = () => {
      let btn;
      let btn2;
      if (page <= 0) {
        btn = <button className="submitBtn" disabled = {page == Formtitles.length -1} onClick={()=>{setPage((currPage) => currPage + 1)}} type="submit">Siguiente</button>
        return btn
      }
      else if(page > 0 && page <= 1) {
        btn = <button className="submitBtn" disabled = {page == 0} onClick={()=>{setPage((currPage) => currPage - 1)}}>Atrás</button>
        btn2 = <button className="submitBtn" disabled = {page == Formtitles.length -1} onClick={()=>{setPage((currPage) => currPage + 1)}} type="submit">Siguiente</button>
        return (<div>{btn} {btn2}</div> )
      }
      else if (page>1){
        btn = <button className="submitBtn" disabled = {page == 0} onClick={()=>{setPage((currPage) => currPage - 2)}}>Cambiar datos de facturación</button>
        return (<div>{btn}</div> )
      }
    }

    return (
      <>
        <div className="formContainer">
            <div className="form-container">
                <div className="header">
                    <h2 className="text_modal">{Formtitles[page]}</h2>
                </div>
                <div className="body">
                  {PageDisplay()}
                </div>
                <div className="footer">
                  {btnDisplay()}
                </div>
            </div>

        </div>
      </>
    )
}






