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
  {id:6,text : 'Usar estados derivados',completed:true},
  {id:7,text : 'Probando tildes como canción',completed:true},
];

// Un componente en React empieza por convención con mayuscula
// Lo de adentro de return es JSX no es HTMl , en JSX se pone className en ves de class que se pone en HTML
// header, img, p , son elementos de REACT , si empezaran con  mayuscula fueran componentes de REACT
function App() {

  const [searchValue,setSearchValue]=React.useState('');

  const [todos,setTodos]=React.useState(defaultTodos);
  const completedTodos=todos.filter(todo => todo.completed).length; //estos son estados derivados , creados a partir de un estado use state
  const totalTodos=todos.length;//estos son estados derivados , creados a partir de un estado use state

  const searchedTodos=todos.filter(
    todo => todo.text.toLowerCase().includes(searchValue.toLowerCase())
  )

  console.log('Los usuarios buscan todos de ' +
  searchValue);

  return (
    <>
    {/* // <React.Fragment> */}
    {/* // <div className="App"> */}

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem id={todo.id} text={todo.text} completed={todo.completed} todos={todos} setTodos={setTodos} />
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
