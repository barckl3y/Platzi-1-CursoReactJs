import './TodoList.css';

// la propiedad children transforma todo lo que esta dentro de un componente como la propiedad children
function TodoList({children}){
// function TodoList(props){
    return(
      <ul className='TodoList'>
        {children}
      </ul>
    );
}

// export default TodoList; te permite poner cualquier nombre al momento de hacer el import y puede dar errores 

// esta exportación obliga que la importación sea con el nombre exacto del componente
export {TodoList};