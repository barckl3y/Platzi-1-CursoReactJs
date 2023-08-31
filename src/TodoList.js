function TodoList(props){
    return(
      <ul>
        {props.children}
      </ul>
    );
}

// export default TodoList; te permite poner cualquier nombre al momento de hacer el import y puede dar errores 

// esta exportación obliga que la importación sea con el nombre exacto del componente
export {TodoList};