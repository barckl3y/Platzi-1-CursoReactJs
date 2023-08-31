import logo from './platzi.webp';
import './App.css';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

// Un componente en React empieza por convención con mayuscula
// Lo de adentro de return es JSX no es HTMl , en JSX se pone className en ves de class que se pone en HTML
// header, img, p , son elementos de REACT , si empezaran con  mayuscula fueran componentes de REACT
function App() {
  return (
    <div className="App">

      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        <TodoItem mensaje='tarea 1' />
        <TodoItem mensaje='tarea 2' />
        <TodoItem mensaje='tarea 3' />
        <TodoItem mensaje='tarea 5' />
      </TodoList>

      <CreateTodoButton />


    </div>
  );
}


export default App;
