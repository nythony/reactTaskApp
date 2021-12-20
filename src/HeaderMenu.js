import React, { useEffect, useState } from "react"

function HeaderMenu(props) {

    // useEffect(() => {    // Update the document title using the browser API    
    //     document.title = `You clicked ${count} times`;  
    // });

    
    return (
        <div className="headerMenu d-flex justify-content-between">
            <span onClick={()=>props.setView("home")}>HOME</span>
            <span onClick={()=>props.setView("incomplete")}>TASK LIST</span>
            <span onClick={()=>props.setView("complete")}>COMPLETED LIST</span>
            <span onClick={()=>props.setView("about")}>ABOUT</span>
        </div>
    )

}

export default HeaderMenu