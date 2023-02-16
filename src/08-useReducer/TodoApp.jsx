import { useTodo } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";


export const TodoApp = () => {

    const { todos, todoCounter, pendingTodoCounter, onAddingTodo, onDeletingTodo, handleToggleTodo } = useTodo()
    
    return (
        <>
            <h1>Total de tareas: {todoCounter}, <span>Pendientes: {pendingTodoCounter}</span></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                  <TodoList todos={todos} onDeleteTodo={onDeletingTodo} onToggleTodo={handleToggleTodo}/>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={onAddingTodo} />
                </div>
            </div>

        </>
    )
}
