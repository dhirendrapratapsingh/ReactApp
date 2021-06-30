
import React, { useState } from "react";


function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div
            className="todo">

            <span  style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.text}</span> 

            <div>
                <button className="waves-effect waves-light btn-small" onClick={() => completeTodo(index)}>Mark</button>
                <button className="deleteButton" onClick={() => removeTodo(index)}><i className="fa fa-trash" aria-hidden="true"></i></button>
            </div>
        </div>
    );
}

function TodoForm({ addTodo }) // another funcyional component
{
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder={"Enter task to be done"}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

function ToDo()  // FUNCYIONAL Componen using Hooks
{
    const [todos, setTodos] = useState([
        {
            text: "Learn about React",
            isCompleted: false
        },
        {
            text: "Meet friend forbrand-logo lunch",
            isCompleted: false
        },
        {
            text: "Build really cool todo app",
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
    
        <>
            <div className="container">
                <div className="center">
                    <h4 >ToDo</h4>
                    <div className="todo-list">
                        {todos.map((todo, index) => (
                            <Todo
                                key={index}
                                index={index}
                                todo={todo}
                                completeTodo={completeTodo}
                                removeTodo={removeTodo}
                            />
                        ))}
                        <TodoForm addTodo={addTodo} />
                    </div>
                </div>
                
            </div>
            <footer style={{position: 'absolute', bottom:'0px', width:'100%'}}>
                <p>Made by: Dhiren singh Copyright &copy; 2019 React Application Prototype, Banglore, India</p>
                <p>Contact information: <a href="mailto:dhirendrapratapsingh398@gmail.com">dhirendrapratapsingh398@gmail.com</a>.</p>
                <ul className="footer">
                    <li><a href="/contact" title="">Privacy</a></li>
                    <li>|</li>
                    <li><a href="/contact" title="">Legal</a></li>
                    <li>|</li>
                    <li><a href="/contact" title="">Terms of use</a></li>
                    <li>|</li>
                    <li><a href="/contact" title="">Contact</a></li>
                </ul>
            </footer>
            
        </>
    );
}

export default ToDo;
