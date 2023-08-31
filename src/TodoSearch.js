import React from 'react';
import './TodoSearch.css';


function TodoSearch(){
  // El estado de react es inmutable y se
  // necesita de una función actualizadora
  // del estado , controlada por React Js 
  // para que pueda hacer los procesos de 
  // inmutabilidad y no afecte el historial de
  // estados de nuestro componente -actualización

  // useState nos permite poner un valor inicial
  const [searchValue,setSearchValue]=React.useState('');

  console.log('Los usuarios buscan todos de ' +
  searchValue);

  return(
    <input 
    placeholder="Cortar cebolla" 
    className="TodoSearch"
    value={searchValue}
    onChange={(event)=>{
      setSearchValue(event.target.value);
      // console.log("Escribiste en el input TodoSearch");
      // console.log({searchValue});
      // console.log(event);
      // console.log(event.target);
      // console.log(event.target.value); //con esto obtenemos lo que estan escribiendo en el input
    }}
    />
  );
}

// export default TodoSearch; te permite poner cualquier nombre al momento de hacer el import y puede dar errores 

// esta exportación obliga que la importación sea con el nombre exacto del componente
export {TodoSearch};