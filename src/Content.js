import React, { useState } from "react"
import CompleteList from "./content/CompleteList.js"
import TaskList from "./content/TaskList.js"
import About from "./content/About.js"
import LandingPage from "./content/LandingPage.js"


function Content(props) {

    const [list, setList] = useState([]);

    return (
        <div className="content">
            {props.view === "home" 
                ? <LandingPage setView={props.setView}/> 
                : props.view === "about" 
                ? <About /> 
                : props.view === "complete" 
                ? <CompleteList view={props.view} list={list} setList={setList}/>
                : <TaskList view={props.view} list={list} setList={setList}/>
            }
        </div>
    )

}

export default Content