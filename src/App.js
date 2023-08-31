import logo from './platzi.webp';
import './App.css';

// Un componente en React empieza por convención con mayuscula
// Lo de adentro de return es JSX no es HTMl , en JSX se pone className en ves de class que se pone en HTML
// header, img, p , son elementos de REACT , si empezaran con  mayuscula fueran componentes de REACT
function App() {
  return (
    <div className="App">

      <TodoItem mensaje='tarea 1' />
      <TodoItem mensaje='tarea 2' />
      <TodoItem mensaje='tarea 3' />
      <TodoItem mensaje='tarea 5' />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos React
        </a>
      </header>
    </div>
  );
}

function TodoItem(props){
  return(
    <li>
      <span>V</span>
      <p>{props.mensaje}</p>
      <span>X</span>
    </li>
  );
}

export default App;
