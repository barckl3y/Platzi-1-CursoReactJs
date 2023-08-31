function TodoItem({text,completed}){
// function TodoItem(props){
  return(
    <li>
      {completed === true ? <span>V</span> : <span></span>}
      <p>{text}</p>
      <span>X</span>
    </li>
  );
}
// export default TodoItem; te permite poner cualquier nombre al momento de hacer el import y puede dar errores 

// esta exportación obliga que la importación sea con el nombre exacto del componente
export {TodoItem};