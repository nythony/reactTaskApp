import React, { useEffect, useState } from "react"

function CompleteList(props) {
    
    return(
        <div className="container d-flex flex-column col col-lg-6 justify-content-center">
            completed<br></br>
            {JSON.stringify(props.list)}
        </div>
    )

}

export default CompleteList