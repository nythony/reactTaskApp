import React, { useEffect, useState } from "react"

function HeaderMenu(props) {

    // useEffect(() => {    // Update the document title using the browser API    
    //     document.title = `You clicked ${count} times`;  
    // });

    
    return (
        <div className="headerMenu d-flex justify-content-between">
            
            <span 
                className={props.view === "home" ? "active" : null} 
                onClick={()=>props.setView("home")}>
                HOME
            </span>

            <span 
                className={props.view === "incomplete" ? "active": null}
                onClick={()=>props.setView("incomplete")}>
                TASK LIST
            </span>

            <span 
                className={props.view === "complete" ? "active": null}
                onClick={()=>props.setView("complete")}>
                COMPLETED LIST
            </span>

            <span 
                className={props.view === "about" ? "active": null}
                onClick={()=>props.setView("about")}>
                ABOUT
            </span>

        </div>
    )

}

export default HeaderMenu