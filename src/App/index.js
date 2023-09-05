import React from 'react';
// import { TodoCounter } from '../TodoCounter';
// import { TodoSearch } from '../TodoSearch';
// import { TodoList } from '../TodoList';
// import { TodoItem } from '../TodoItem';
// import { CreateTodoButton } from '../CreateTodoButton';
import { AppUI } from './AppUI';
import {useLocalStorage} from './useLocalStorage'

// Step #1 : Put this array in the navigator console
// const defaultTodos=[
//   {id:1,text : 'Cortar cebolla',completed:true},
//   {id:2,text : 'Tomar el curso de intro a React.js',completed:false},
//   {id:3,text : 'Llorar con la Llorona',completed:false},
//   {id:4,text : 'LALALALA',completed:false},
//   {id:5,text : 'Conseguir empleo remoto',completed:true},
//   {id:6,text : 'Usar estados derivados',completed:true},
//   {id:7,text : 'Probando tildes como canción',completed:true},
// ];

// Step #2 : Stringify the previuos array object of initial data
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));

// This steps are included in the source sode programming
// const stringfiedTodos=JSON.stringify(defaultTodos);
// localStorage.setItem('TODOS_V1',stringfiedTodos);
// const localStorageTodos=localStorage.getItem('TODOS_V1');
// const parsedTodos=JSON.parse(localStorageTodos);
// localStorage.removeItem('TODOS_V1');


// Un componente en React empieza por convención con mayuscula
// Lo de adentro de return es JSX no es HTMl , en JSX se pone className en ves de class que se pone en HTML
// header, img, p , son elementos de REACT , si empezaran con  mayuscula fueran componentes de REACT
function App() {
  // const {todos,saveTodos}=useLocalStorage('TODOS_V1',[]);

  // de esta forma renombramos propiedades y recibimos varios returns
  const {item:todos,saveItem:saveTodos,loading,error,}=useLocalStorage('TODOS_V1',[]);
  const [searchValue,setSearchValue]=React.useState('');
  const completedTodos=todos.filter(todo => todo.completed).length; //estos son estados derivados , creados a partir de un estado use state
  const totalTodos=todos.length;//estos son estados derivados , creados a partir de un estado use state


  // console.log('Log 1');

  // eso se ejecuta siempre
  // React.useEffect(()=>{
  //   console.log('L00000og 2');
  // });

  // esto hace que se ejecute una sola vez
  // React.useEffect(()=>{
  //   console.log('L00000og 2');
  // },[]);

  // esto hace que se ejecute solo si cambia el estado de totalTodos
  // React.useEffect(()=>{
  //   console.log('L00000og 2');
  // },[totalTodos]);

  // console.log('Log 3');



  const searchedTodos=todos.filter(
    todo => todo.text.toLowerCase().includes(searchValue.toLowerCase())
  )

  const deleteTodo =(id) => {
    // con los ... se dice quiero una copia de esa variable

    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id ===id
    );
    // splice dice desde que index , a partir de ahí cuantos pedazos corto
    newTodos.splice(todoIndex,1);
    // setTodos(newTodos);
    saveTodos(newTodos);
  };

  const completedTodo =(id) => {
    // con los ... se dice quiero una copia de esa variable
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id ===id
    );

    // con esto ponemos el valor contrario del estado actual , completado o no completado al dar clic en los items
    newTodos[todoIndex].completed=!newTodos[todoIndex].completed;
    // setTodos(newTodos);
    saveTodos(newTodos);
  };

  return(
    <AppUI 
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completedTodo={completedTodo}
      deleteTodo={deleteTodo}
    />
  )
}


export default App;
