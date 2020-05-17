import React, {useState} from "react";
import { Button } from 'react-bootstrap';
var uuid = require("uuid");


function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value}); //input geldiğinde task değişkenine girilen value atanır.
    }


    function handleSubmit(e) {
        e.preventDefault(); //Bunu kullanarak default işlemleri (form submittin default işlemleri) önlendi.
        if (todo.task.trim()) { //trim fonksiyonu stringdeki boşlukları temizler. Fakat string değişmez.
            addTodo({ ...todo, id: uuid.v4()}); //uuid.v4() ile her bir todo'ya unique bir id oluşturulur.
            // reset task input
            setTodo({ ...todo, task: "" });
        }
    }

    return (
        <div class="form-group">
        <form onSubmit={handleSubmit}>
            <input
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
                placeholder="write something..."
                class="form-control"
            />
            
            <Button variant="primary" type="submit">Submit</Button>
        </form>
        </div>
    )
}

export default TodoForm; //Diğer js'lerden çağırabilmek için kullanılır.