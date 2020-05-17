import React from "react";
import Todo from "./Todo"

function TodoList({ todos, toggleComplete, removeTodo }) {
    return (
        <div>
            {todos.map(todo => ( // map fonksiyonu ile her bir todo için <Todo> tagi çağrıldı.
                <Todo //Todo.js'de oluşturulan yapı çağrıldı. Parametreleri atandı.
                key={todo.id} //key parametresi default olarak gelir.
                todo={todo}
                toggleComplete={toggleComplete} 
                removeTodo={removeTodo}
                />
            ))}
        </div>
    )
}

export default TodoList;