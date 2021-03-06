import React from "react"
import InputForm from "./InputForm.js"

/*
 Suppress warnings:
 - Intentionally using non-strict equality for class IDs and numerical IDs
 - Only comparing numerical values programmatically assigned
*/ 
/* eslint-disable */

function TaskList(props) {

    /*
    Props from Content:
        list()
        setList()
    */

    // Takes in a new task object {id: (int), text: (string)} and adds to list
    const addTask = (task) => {
        if (task.text !== "") {
            const newList = [task, ...props.list]
            props.setList(newList)
        }
    }

    // Marks a task complete and removes it from the taskList to the completeList
    function completeTask(event) {
        let taskId = event.target.parentElement.parentElement.id
        const newList = props.list.map( (task) => {
            if (task.id == taskId) {
                task.isCompleted = true
            }
            return task
        })
        props.setList(newList)
    }

    // Replaces display of text with input field for editing
    function editTask(event) {
        let taskId = event.target.parentElement.parentElement.id
        const newList = props.list.filter( (task) => {
            if (task.id == taskId) {
                task.edit = true
            }
            return task
        })
        props.setList(newList)
    }

    // Overwrite task text
    function changeTask(event) {
        let taskId = event.target.parentElement.parentElement.id
        const newList = props.list.filter( (task) => {
            if (task.id == taskId) {
                task.text = event.target.value
            }
            return task
        })
        props.setList(newList)
    }

    // Saves value of input field to task
    function saveTask(event) {
        let taskId = event.target.parentElement.parentElement.id
        const newList = props.list.filter( (task) => {
            if (task.id == taskId) {
                task.text = task.text.trim()
                if (task.text === "") {
                    return null
                }
                task.edit = false
            }
            return task
        })
        props.setList(newList)
    }

    // Deletes the task from the list of tasks
    function deleteTask(event) {
        let taskId = event.target.parentElement.parentElement.id
        const newList = props.list.filter( (task) => {
            if (task.id != taskId) {
                return task
            }
            return null
        })
        props.setList(newList)
    }

    
    return(
        <div className="container d-flex flex-column col col-lg-6 justify-content-center">
            <InputForm 
                addTask={addTask}
            />
            <div className="card taskList">
                <div className="card-header">
                    <ul className="list-group list-group-flush">
                        {props.list.some((task) => {
                            return !task.isCompleted
                        }) 
                            ? props.list.map( (value, index) => {
                                return !value.isCompleted 
                                    ? <li 
                                        key={index} 
                                        id={value.id} 
                                        className="list-group-item taskItem d-flex justify-content-between">
                                        <div className="taskText">
                                            {value.edit 
                                                ? <textarea 
                                                    type="text"
                                                    className="form-control"
                                                    value={value.text}
                                                    onChange={(event)=> changeTask(event)}>
                                                </textarea>
                                                : value.text}
                                        </div>
                                        {value.edit 
                                            ? <div className="taskIcons">
                                                <span 
                                                    className="fas fa-save"
                                                    onClick={(event)=>saveTask(event)}>
                                                </span>
                                            </div>
                                            : <div className="taskIcons">
                                                <span 
                                                    className="fas fa-check"
                                                    onClick={(event)=>{completeTask(event)}}>
                                                </span>
                                                <span 
                                                    className="fas fa-pencil-alt"
                                                    onClick={(event)=>{editTask(event)}}>
                                                </span>
                                                <span 
                                                    className="fas fa-trash"
                                                    onClick={(event)=>{deleteTask(event)}}>
                                                </span>
                                            </div>}
                                    </li>
                                    : null
                            }) 
                            : "You currently have no tasks!"
                        }
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default TaskList