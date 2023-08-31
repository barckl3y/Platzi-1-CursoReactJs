import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos=[
  {id:1,text : 'Cortar cebolla',completed:true},
  {id:2,text : 'Tomar el curso de intro a React.js',completed:false},
  {id:3,text : 'Llorar con la Llorona',completed:false},
  {id:4,text : 'LALALALA',completed:false},
  {id:5,text : 'Conseguir empleo remoto',completed:true},
];

// Un componente en React empieza por convención con mayuscula
// Lo de adentro de return es JSX no es HTMl , en JSX se pone className en ves de class que se pone en HTML
// header, img, p , son elementos de REACT , si empezaran con  mayuscula fueran componentes de REACT
function App() {
  return (
    <>
    {/* // <React.Fragment> */}
    {/* // <div className="App"> */}

      <TodoCounter completed={3} total={5} />
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem id={todo.id} text={todo.text} completed={todo.completed} />
        ))}
        {/* La propiedad Key es para que cada elemento de un componente tenga un identificador único */}
        {/* <TodoItem mensaje='tarea 1' />
        <TodoItem mensaje='tarea 2' />
        <TodoItem mensaje='tarea 3' />
        <TodoItem mensaje='tarea 5' /> */}
      </TodoList>

      <CreateTodoButton />
    {/* </div> */}
    {/* // </React.Fragment> */}
    </>
  );
}


export default App;
