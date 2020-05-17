import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Card } from "react-bootstrap";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() { // reactın ana fonskiyonu
  const [todos, setTodos] = useState([]); //Bir state ile bir fonksiyonu birbirine bağlar. setTodos çağrıldığında todos stateinde değişiklikler yapılabilir.

  useEffect(() => { //yan etkili işlemlerde kullanılan özelliktir. local storage'den veri okunur ve okunan veri setTodos kullanılarak todos stateine atanır. Local storage'den
                    // veri okumak yan etkili bir işlemdir. Çünkü buı işlem sadece render sırasında tamamlanamaz.
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) { //JSON olarak okunan veri storageTodos değişkenine atanır bu veri sıfırdan farklı ise setTodos ile todos'a atanır.
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => { //yapılan değişiklikleri  local storage kaydetmek için kullanılır.
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) { // To-Do ekleme fonksiyonu
    setTodos([todo, ...todos]); //userState'de tanımlanan fonksiyon kullanılarak todos state'i değiştirldi.
                                // [todo, ...todos] ile parametre olarak gelen "todo" önceki todo'lar ile birleştirildi.
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => { //map fonksiyonu ile tüm listede gezer ve istenen id bulunur.
        if (todo.id === id) {//Bulunan id'ye ait completed değişkeni toggle edilir.
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="card text-center" style={{width: "28rem"}}>
          <h3 className="card-header">To-Do List</h3>
          <div className="card-body">
          <ul className="list-group list-group-flush">
              <p class="card-text">
                <TodoList
                  todos={todos}
                  toggleComplete={toggleComplete}
                  removeTodo={removeTodo}
                />
              </p>
              </ul>
          </div>

          <div class="card-footer text-muted">
            <TodoForm addTodo={addTodo} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
