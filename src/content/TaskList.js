import React, { useEffect, useState } from "react"
import InputForm from "./InputForm.js"

function TaskList(props) {

    // Takes in a new task object {id: (int), text: (string)} and adds to list
    const addTask = (task) => {
        if (task.text !== "") {
            const newList = [task, ...props.list]
            props.setList(newList)
        }
    }

    
    return(
        <div className="container d-flex flex-column col col-lg-6 justify-content-center">
            <InputForm 
                addTask={addTask}
            />
            <div className="card taskList">
                <div className="card-header">
                    {/* <div>You currently have no tasks!</div> */}
                    <ul className="list-group list-group-flush">
                        { props.list.length > 0 ? props.list.map( (value, index) => {
                            return <li 
                                    key={index} 
                                    id={value.id} 
                                    className="list-group-item taskItem">
                                    {value.text}
                                </li>
                        }) : "You currently have no tasks!"}
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default TaskList