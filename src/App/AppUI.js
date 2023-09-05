import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
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