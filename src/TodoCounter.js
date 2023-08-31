function TodoCounter(){
    return(
      <h1>Has completado 3 de 5 TODOS</h1>
    );
}

// export default TodoCounter; te permite poner cualquier nombre al momento de hacer el import y puede dar errores 

// esta exportación obliga que la importación sea con el nombre exacto del componente
export {TodoCounter};