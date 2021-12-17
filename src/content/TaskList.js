import React, { useEffect, useState } from "react"
import InputForm from "./InputForm.js"

function TaskList() {

    const [list, setList] = useState([]);

    useEffect(() => {
        console.log(JSON.stringify(list))
    })

    // Takes in a new task object {id: (int), text: (string)} and adds to list
    const addTask = (task) => {
        if (task.text !== "") {
            const newList = [task, ...list]
            setList(newList)
        }
    }
    
    return(
        <div className="content">
            <div className="container d-flex flex-column col col-lg-6 justify-content-center">
                <InputForm 
                    addTask={addTask}
                />
            </div>
        </div>
    )

}

export default TaskList