import React, { useState } from "react"

function InputForm() {

    const [input, setInput] = useState("");
    
    return (
        <div className="card bg-primary bg-opacity-50 text-white">
            <div className="card-header">
                <h2 class="card-text text-center text-dark">Task List</h2>
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
                        Create
                    </button>
                </div>
            </div>

        </div>
    )
}

export default InputForm