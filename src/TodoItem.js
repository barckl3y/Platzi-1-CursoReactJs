import './TodoItem.css';

function TodoItem({id,text,completed,onComplete,onDelete}){
// function TodoItem(props){
  return(
    <li key={id} className="TodoItem">
      <span 
        onClick={()=>{onComplete()}}
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
          V
      </span>
        
      {/* {completed === true ? <span>V</span> : <span></span>} */}
      
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      {/* <span className="Icon Icon-delete" onClick={(event)=>{console.log(text)}}> */}
      {/* <span className="Icon Icon-delete" onClick={(event)=>{
        const searchedTodos = todos.filter(todo => todo.id !== id);
        setTodos(searchedTodos);
      }}> */}
      <span className="Icon Icon-delete" onClick={()=>{onDelete()}}>
        X
      </span>
    </li>
  );
}
// export default TodoItem; te permite poner cualquier nombre al momento de hacer el import y puede dar errores 

// esta exportación obliga que la importación sea con el nombre exacto del componente
export {TodoItem};