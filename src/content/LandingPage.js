import React from "react"

function LandingPage(props) {

    /*
    Props from Content:
        setView()
    */
    
    return (
        <div className="container">
            <h1>React Coding Exercise!</h1>

            &nbsp;

            <h2>Task List</h2>
            <p>
                This page should start out as a simple input field with a button. When the button is clicked, the text is added to a task list below. When an item in the task list is clicked, it is marked as completed (you may get creative here, remove the item, grey it out, strike through, feel free to show off some CSS animation skills here). You may also add any feature here that you think might be useful to the users. 
                <span className="visitPage linkTitle d-block" onClick={()=>props.setView("incomplete")}>VISIT PAGE</span>
            </p>

            <h2>Completed List</h2>
            <p>
                This page should display the tasks the user has already completed.
                <span className="visitPage linkTitle d-block" onClick={()=>props.setView("complete")}>VISIT PAGE</span>
            </p>

            <h2>About</h2>
            <p>
                This page should display a description of how you chose to solve the coding task in the
                'Task List' page with links to any third part libraries you chose to use. Ensure you outline your approach to this problem and reference the libraries used here.
                <span className="visitPage linkTitle d-block" onClick={()=>props.setView("about")}>VISIT PAGE</span>
            </p>
            
        </div>
    )

}

export default LandingPage