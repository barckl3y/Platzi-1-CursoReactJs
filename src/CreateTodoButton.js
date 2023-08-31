import './CreateTodoButton.css'

function CreateTodoButton(){
    return(
      <button className="CreateTodoButton">
        +
      </button>
    );
}

// export default CreateTodoButton; te permite poner cualquier nombre al momento de hacer el import y puede dar errores 

// esta exportación obliga que la importación sea con el nombre exacto del componente
export {CreateTodoButton};