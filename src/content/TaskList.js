import React, { useEffect, useState } from "react"
import InputForm from "./InputForm.js"

function TaskList(props) {

    // const [list, setList] = useState([]);

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
            incomplete<br></br>
            {JSON.stringify(props.list)}
        </div>
    )

}

export default TaskList