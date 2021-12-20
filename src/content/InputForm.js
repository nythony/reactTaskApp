import React, { useState } from "react"

function InputForm(props) {

    /*
    Props from TaskList:
        addTask()
    */
    const [input, setInput] = useState("");

    // Updates functional state to keep track of user input
    const handleChange = (event) => {
        setInput(event.target.value);
    }

    // Passes user input to parent component and creates a new task
    const handleSubmit = (event) => {
        event.preventDefault();

        props.addTask({
            id: Math.floor(Math.random() * 10000),
            text: input.trim(),
            isCompleted: false,
            edit: false
        })
        
        setInput('');
    }
    
    return (
        <div className="card bg-primary bg-opacity-50">
            <div className="card-header">
                <h2 className="card-text text-center text-dark">Task List</h2>
                    <form className="todo-form" onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <input 
                                type="search" 
                                id="inputSearch-text" 
                                className="form-control" 
                                name="inputSearch-text"
                                placeholder="Enter a task"
                                value={input}
                                onChange={handleChange}
                            />
                            <button 
                                className="btn btn-primary"
                                id="inputSearch-button"
                                name="inputSearch-button"
                                type="submit"
                            >
                                Create
                            </button>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default InputForm