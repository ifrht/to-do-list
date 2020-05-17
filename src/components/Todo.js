import React from "react";
import { Alert } from 'react-bootstrap';

function Todo({ todo, toggleComplete, removeTodo }) {

    function handleCheckboxClick() { //onClick durumunda çalıştırılacak fonksiyon complete durumunu değiştirmek için
        toggleComplete(todo.id);
    }

    function handleRemoveClick() { //remove fonksiyonu click durumunda çalıştırılacak.
        removeTodo(todo.id); //App.js'de tanımlanan fonksiyon çağrılır.
    }

  return (
      <li className="list-group-item">
      <div style={{position:"absolute", textAlign:"left", marginLeft:"-30px"}}>
    <i onClick={handleRemoveClick} class="far fa-trash-alt"></i></div>
     <div>
      <Alert onClick={handleCheckboxClick} variant={ todo.completed ? "success" : "danger" } style={{color: "black", textDecoration: todo.completed ? "line-through" : null}}>

      <p>
      {todo.task}
      </p>
      </Alert>
      </div>

      </li>
  );
}

export default Todo;
