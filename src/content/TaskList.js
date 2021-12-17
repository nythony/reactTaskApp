import React, { useState } from "react"

function TaskList() {

    const [input, setInput] = useState("");
    
    return (
        <div className="content">
            <div className="container d-flex flex-column col col-lg-6 justify-content-center">
                <div className="card bg-primary bg-opacity-75 text-white">
                    <div className="card-header">
                        <h2 class="card-text text-center">Task List</h2>
                        <div class="input-group mb-3">
                            <input 
                                type="search" 
                                id="inputSearch-text" 
                                className="form-control" 
                                name="inputSearch-text"
                                placeholder="Enter a task"
                                value={input}
                            />
                            <button 
                                className="btn btn-primary"
                                id="inputSearch-button"
                                name="inputSearch-button"
                            >
                                <span 
                                    className="fas fa-plus-circle pe-1 align-middle inputSearch-button-icon">
                                </span>
                                Create
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TaskList