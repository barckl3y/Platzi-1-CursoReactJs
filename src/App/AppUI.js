import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completedTodo,
    deleteTodo,
}){

    return (
        <>
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
    
          <TodoList>
            {loading && <p>Estamos cargando ...</p>}
            {error && <p>Hubo un error!!</p>}

            {(!loading && searchedTodos.lenght == 0) && <p>!Crea tu primer TODO!</p>}

            {searchedTodos.map(todo =>(
              <TodoItem 
                key={todo.id}
                id={todo.id} 
                text={todo.text} 
                completed={todo.completed}  
                onComplete={()=>completedTodo(todo.id)}
                onDelete={()=>{deleteTodo(todo.id)}}
              />
            ))}
          </TodoList>
    
          <CreateTodoButton />
        </>
      );

}

export { AppUI };