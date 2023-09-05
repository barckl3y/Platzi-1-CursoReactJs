import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import {useLocalStorage} from './useLocalStorage'

// const defaultTodos=[
//   {id:1,text : 'Cortar cebolla',completed:true},
//   {id:2,text : 'Tomar el curso de intro a React.js',completed:false},
//   {id:3,text : 'Llorar con la Llorona',completed:false},
//   {id:4,text : 'LALALALA',completed:false},
//   {id:5,text : 'Conseguir empleo remoto',completed:true},
//   {id:6,text : 'Usar estados derivados',completed:true},
//   {id:7,text : 'Probando tildes como canción',completed:true},
// ];

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));

// const stringfiedTodos=JSON.stringify(defaultTodos);
// localStorage.setItem('TODOS_V1',stringfiedTodos);
// const localStorageTodos=localStorage.getItem('TODOS_V1');
// const parsedTodos=JSON.parse(localStorageTodos);
// localStorage.removeItem('TODOS_V1');






// Un componente en React empieza por convención con mayuscula
// Lo de adentro de return es JSX no es HTMl , en JSX se pone className en ves de class que se pone en HTML
// header, img, p , son elementos de REACT , si empezaran con  mayuscula fueran componentes de REACT
function App() {
  const [todos,saveTodos]=useLocalStorage('TODOS_V1',[]);
  const [searchValue,setSearchValue]=React.useState('');
  const completedTodos=todos.filter(todo => todo.completed).length; //estos son estados derivados , creados a partir de un estado use state
  const totalTodos=todos.length;//estos son estados derivados , creados a partir de un estado use state

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

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem 
            id={todo.id} 
            key={todo.id}
            text={todo.text} 
            completed={todo.completed} 
            todos={todos} 
            setTodos={saveTodos} 
            onComplete={()=>completedTodo(todo.id)}
            onDelete={()=>{deleteTodo(todo.id)}}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}


export default App;
