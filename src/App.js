import logo from './platzi.webp';
import './App.css';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import React from 'react';

const defaultTodos=[
  {text : 'Cortar cebolla',completed:true},
  {text : 'Tomar el curso de intro a React.js',completed:false},
  {text : 'Llorar con la Llorona',completed:false},
  {text : 'LALALALA',completed:false},
  {text : 'Conseguir empleo remoto',completed:false},
];

// Un componente en React empieza por convención con mayuscula
// Lo de adentro de return es JSX no es HTMl , en JSX se pone className en ves de class que se pone en HTML
// header, img, p , son elementos de REACT , si empezaran con  mayuscula fueran componentes de REACT
function App() {
  return (
    <React.Fragment>
    {/* // <div className="App"> */}

      <TodoCounter completed={3} total={5} />
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem key={todo.text} text= {todo.text} completed={todo.completed} />
        ))}
        {/* La propiedad Key es para que cada elemento de un componente tenga un identificador único */}
        {/* <TodoItem mensaje='tarea 1' />
        <TodoItem mensaje='tarea 2' />
        <TodoItem mensaje='tarea 3' />
        <TodoItem mensaje='tarea 5' /> */}
      </TodoList>

      <CreateTodoButton />
    {/* </div> */}
    </React.Fragment>
  );
}


export default App;
