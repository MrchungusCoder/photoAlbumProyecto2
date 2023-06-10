# photoalbum
proyecto realizado en el curso de react para el coding bootcamp espol

## Descripción
Este fue un proyecto realizado para el curso de react para el coding bootcamp espol.
Tenía como intención crear una matríz que permitiese subir imágenes para crear un album de fotos
Al tener ya seleccionadas las fotos, se procede al pago mediante un form presentado en el formato de una modal,
terminado el form, al envíar los datos y dar en siguiente,
se mostraba en pantalla los datos que el usuario había ingresado. Al finalizar, se muestra un mensaje de 
"pedido realizado con éxito", dando a su vez la opción de volver al form para cambiar algún dato de la factura.

## Desarrollo
1. se realizó una carpeta que almacenaría los componentes a emplear en el proyecto, se crearon en total 6 componentes

1.1 dragAndDrop.js
  Este el componente principal en donde la matriz recibe las imágenes que el usuario arrastra desde su ordenador.
  Existen cuatro funciones en total

1.2 formModal.js
  Es un componente que almacena el form (form.js) en formato de un modal, este puede ser cerrado mediante el nombre de entidad
  &times; es abierto al dar en "continuar" cuando el usuario quiere proceder a la facturazión, este recibe un propchildren que será
  mostrado en dragAndDrop.js
  
1.3 form.js
 Contiene la función pagedisplay, esta permite cambiar el título y el contendio a presentar dentro del modal, 
 además de los botones a emplear en cada página, además recibe los datos de la factura

1.4 dataBill.js
 Contiene los datos del formulario, al dar en el botón "enviar datos" estos serán guardados en los datos de facturazión

1.5 billing.js
 Contiene los datos de facturación escritos en el formulario, estos datos se los guarda en form.js para luego ser enviados a este
 mediante las propiedades de "UserBilling".
 

## Despliegue
Al descargar por medio de git hub y querer usarlo desde el ordenador, se debe utilizar el comando "npm start" para inicializar el proyecto 👍
En caso de salir este error " “react-scripts” no se reconoce como un comando interno o externo "
se debe realizar el siguiente comando "npm install react-scripts --save" (eso me paso con el proyecto del profesor Carlos Cedeño)

