

import React, { useState, useRef } from "react";
import { ModalLoader } from "./formModal";
import { FormStructure } from "./form";



export function DragAndDropLoader() {
  const [images, Setimages] = useState([]);
  const [isDragged, SetisDragged] = useState(false);
  const showContent = images.length > 0;
 
  
  function deleteImg(idx) {
    Setimages((prevImg) => prevImg.filter((_, i) => i !== idx));
  }

  function onDragOver(e) {
    e.preventDefault();
    SetisDragged(true);
    e.dataTransfer.DropEffect = "copy;";
  }

  function onDragLeave(e) {
    e.preventDefault();
    SetisDragged(false);
  }

  function onDrop(e) {
    e.preventDefault();
    SetisDragged(false);
    const files = e.dataTransfer.files;
    console.log(files)
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        Setimages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }
  
  return (
    <>
      <div className="card">
        <div className="top">
          <p className="title">Photo Album</p>
        </div>

        <div
          className="drag-area"
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <span className="select"> Sube tus imágenes aquí</span>

        </div>

        <div className="container">
          {images.map((img, index) => (
            <div className="image" key={index}>
              <span className="delete" onClick={() => deleteImg(index)}>
                &times;
              </span>
              <img src={img.url} alt={img.name} />
            </div>
          ))}
        </div>

        <div className="btnContainer">
          {showContent ? (
            <ModalLoader>
              <FormStructure />
            </ModalLoader>
          ):(
            <p className="warning">Ingresa tus imágenes para proceder a facturar</p>
          )}
          
        </div>

      </div>
    </>
  );
}

export default DragAndDropLoader


