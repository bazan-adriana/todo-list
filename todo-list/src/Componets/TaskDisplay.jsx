import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

// child //
// TaskDisplay component (props)-display individual tasks that are stored in the todos array
const TaskDisplay = (props) => {

    const handleTodoDelete = (delIdx) => {
        const filteredTodos = props.todos.filter((eachToDo, i) => i !== delIdx);
        props.onUpdate(filteredTodos);
    };

    const handleUpdate = (event, i) => {   // handleUpdate function is attached with onChange event
        const listToUpdate = [...props.todos]
        listToUpdate[i].completed = event.target.checked
        props.onUpdate(listToUpdate);    // logic after submit = App.js line 29
    }


    return (
        <Card className="container text-center bg-dark">

            {props.todos.map((eachToDo, i) => {
                return (
                    <div className="card-header bg-dark text-light"

                        key={i} style={eachToDo.completed ? {textDecoration: "line-through"} : {textDecoration: "none"}}>
                        {eachToDo.newTodo}

                        <input onChange={(event) => handleUpdate(event, i)}
                            style={{ marginLeft: "10px" }} type="checkbox" checked={eachToDo.completed} />

                        <button className='btn btn-danger' onClick={(event) => handleTodoDelete(i)}
                            style={{ marginLeft: "15px" }}>Delete</button>

                    </div>
                )
            })
            }

        </Card>
    )
}


export default TaskDisplay;