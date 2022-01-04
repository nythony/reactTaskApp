import React from "react"

function HeaderMenu(props) {
    
    /*
    Props from App:
        view
        setView()
    */

    return (
        <div className="headerMenu">
            
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