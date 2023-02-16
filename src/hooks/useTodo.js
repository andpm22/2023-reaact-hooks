import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {
  
    const initialState = [
        // {
        //     id: new Date().getTime(),
        //     description: 'Jugar God of War',
        //     done: false
        // },
    
    ]
    
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }
    
    const [todos, dispatchTodoAct] = useReducer(todoReducer, initialState, init);
    
        useEffect(() => {
          localStorage.setItem('todos', JSON.stringify(todos) );
    
        }, [todos])
        
    
        const onAddingTodo = (todo) => {
            const action = {
                type: 'Add Todo',
                payload: todo
            }
            
            dispatchTodoAct(action);
        }
    
        const onDeletingTodo = (id) => {
            const action = {
                type: 'Remove Todo',
                payload: id
            }
            
            dispatchTodoAct(action);
        }
    
        const handleToggleTodo = (id) => {
            dispatchTodoAct({
                type: 'Status Todo',
                payload: id
            })
        }
        const pendingTodoCounter = todos.filter(todo =>  !todo.done ).length;
        
         
    return {
        todos,
        onAddingTodo,
        onDeletingTodo,
        handleToggleTodo,
        pendingTodoCounter,
        todoCounter: todos.length
    }

}
