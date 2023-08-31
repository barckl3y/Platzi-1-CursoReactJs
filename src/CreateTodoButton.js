import React from 'react'
import './CreateTodoButton.css'

// function CreateTodoButton(){
//     return(
//       <button className="CreateTodoButton"
//       onClick={
//         ()=>console.log("le diste click")
//         }>
//         +
//       </button>
//     );
// }


function CreateTodoButton(){
  const [numClicks,setNumClicks]=React.useState(0);

  return(
    <button className="CreateTodoButton"
    onClick={
      (event)=>{
        setNumClicks(numClicks => numClicks+1);
        console.log("Has dado ");
        console.log({numClicks});
        console.log("clicks");
        // console.log("le diste click");
        // console.log(event);
        // console.log(event.target) ;//es el elemento html que hizo la llamada al evento
      }
    }>
      +
    </button>
  );
}

// export default CreateTodoButton; te permite poner cualquier nombre al momento de hacer el import y puede dar errores 

// esta exportación obliga que la importación sea con el nombre exacto del componente
export {CreateTodoButton};