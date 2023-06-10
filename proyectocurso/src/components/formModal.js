

import React, { useState } from "react";
import { FormStructure } from "./form.js";

export function ModalLoader( {children} ) {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <button className="show-modal" onClick={openModal}>
        Continuar 
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {children}
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


export default ModalLoader;
