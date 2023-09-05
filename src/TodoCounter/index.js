import './TodoCounter.css'

// const estilos={
//   backgroundColor:'red'
// }

function TodoCounter({total,completed}){
// function TodoCounter(props){
    return(
      // <h1 style={{
      //   // fontSize:24
      //   fontSize:'24px',
      //   textAlign:'center',
      //   margin:0,
      //   padding:'48px',
      // }}
      // >
      completed === total ?
        <h1 className="TodoCounter">
          Felicitaciones has completado <span>{completed}</span> de <span>{total}</span> TODOS
        </h1>
      :
        <h1 className="TodoCounter">
          Has completado <span>{completed}</span> de <span>{total}</span> TODOS
        </h1>
    );
}

// export default TodoCounter; te permite poner cualquier nombre al momento de hacer el import y puede dar errores 

// esta exportación obliga que la importación sea con el nombre exacto del componente
export {TodoCounter};