import React, { useState } from "react"
import InputForm from "./InputForm.js"

function TaskList() {
    
    return(
        <div className="content">
            <div className="container d-flex flex-column col col-lg-6 justify-content-center">
                <InputForm />
            </div>
        </div>
    )

}

export default TaskList