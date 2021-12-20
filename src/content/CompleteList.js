import React, { useEffect, useState } from "react"

function CompleteList(props) {
    
    return(
        <div className="container d-flex flex-column col col-lg-6 justify-content-center">

            <div className="card bg-primary bg-opacity-50">
                <div className="card-header">
                    <h2 className="card-text text-center text-dark">Completed List</h2>
                </div>
            </div>
            <div className="card completedList">
                <div className="card-header">
                    <ul className="list-group list-group-flush">
                        {props.list.some((task) => {
                            return task.isCompleted
                        }) 
                            ? props.list.map( (value, index) => {
                                return value.isCompleted ?
                                    <li 
                                        key={index} 
                                        id={value.id} 
                                        className="list-group-item taskItem">
                                        {value.text}
                                    </li>
                                    : null
                            }) 
                            : "You currently have no completed tasks!"
                        }
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default CompleteList