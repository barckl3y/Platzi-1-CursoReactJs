import './TodoItem.css';

function TodoItem({id,text,completed}){
// function TodoItem(props){
  return(
    <li key={id} className="TodoItem">
      <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>V</span>
      {/* {completed === true ? <span>V</span> : <span></span>} */}
      
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}
// export default TodoItem; te permite poner cualquier nombre al momento de hacer el import y puede dar errores 

// esta exportación obliga que la importación sea con el nombre exacto del componente
export {TodoItem};