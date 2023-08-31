import './TodoSearch.css';


function TodoSearch(){
    return(
      <input 
      placeholder="Cortar ceboola" 
      className="TodoSearch"
      onChange={(event)=>{
        console.log("Escribiste en el input TodoSearch");
        console.log(event);
        console.log(event.target);
        console.log(event.target.value); //con esto obtenemos lo que estan escribiendo en el input
      }}
      />
    );
}

// export default TodoSearch; te permite poner cualquier nombre al momento de hacer el import y puede dar errores 

// esta exportación obliga que la importación sea con el nombre exacto del componente
export {TodoSearch};