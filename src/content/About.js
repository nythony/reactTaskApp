import React, { useState } from "react"

function About() {
    
    return (
        <div className="container">
            <h1>Overview</h1>
            <p>
                This was a quickly built React application to meet the requirements outlined. In total, I probably spent 15 hours from start to finish. The total time includes learning to use the functional programming model (previously I only developed using class components), designing the wirefram/UI/UML diagrams, setting up the application, and developing itself. 
            </p>

            &nbsp;

            <h2>Analysis and Design</h2>

            &nbsp;

            <p>Sketch: https://www.sketch.com</p>
            <p>- This is actually the first time I used Sketch. I started out with a basic wireframe and color schema. After having a wireframe, I was able to analyze how I wanted to compartmentalize the page into React components. During development, I slowly progressed the wireframe into a UI diagram to help me visualize how the page would look before I tried to develop it. In the end, I'm a developer and not so much a designer.</p>

            &nbsp;

            <p>LucidChart: https://lucid.app/documents</p>
            <p>- LucidChart was used to build the UML diagram after the wirefram was developed. The UML diagram would consist of the different React components, and the states and props each component would have. This diagram is useful for keeping the structure of the application organized and was a visual for what and how components interact with others.</p>

            

        </div>
    )

}

export default About