import React, { useState } from 'react'  // input --> state variables (keep track of the change)
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

// child //
// TaskForm component takes the user's input and adds a new task to the todo list
const TaskForm = (props) => {
    const [newTodo, setNewTodo] = useState("");

    const handleNewTodoSubmit = (event) => { //handleNewTodoSubmit function is triggered by the form's onSubmit event 
        event.preventDefault();
        const newTask = { newTodo: newTodo, completed: false };
        props.addTask(newTask);     // logic after submit = App.js line 15
        setNewTodo("");
    };

    const handleChange = (event) => {
        setNewTodo( event.target.value )
    }

    return (
        <Card className="container mt-5 text-center bg-dark">
            <div className="card-header bg-info text-dark">
                Add New Task
            </div>
            <div className="card-body bg-dark">

                <form onSubmit={handleNewTodoSubmit}>
                    <input
                        onChange={handleChange}
                        name="newTodo"
                        type="text"
                        value={newTodo}
                    />

                    <div>
                        <hr />
                        <button className='btn btn-warning'>Add</button>
                    </div>
                </form>

            </div>
        </Card>
    )
}

export default TaskForm;
