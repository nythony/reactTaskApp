import React from "react"

function About() {
    
    return (
        <div className="container">
            <h1>About Development</h1>

            &nbsp;

            <h2>Planning, Analysis, and Design</h2>

            <div className="linkTitle">Sketch: <a href="https://www.sketch.com">https://www.sketch.com</a></div>
            <p>
                - This is actually the first time I used Sketch. I started out with a basic wireframe and color schema. After having a wireframe, I was able to analyze how I wanted to compartmentalize the page into React components. During development, I slowly progressed the wireframe into a UI diagram to help me visualize how the page would look before I tried to develop it. In the end, I am a developer, and not so much a designer.
            </p>

            &nbsp;

            <div className="linkTitle">LucidChart: <a href="https://lucid.app/documents">https://lucid.app/documents</a></div>
            <p>
                - LucidChart was used to build the UML diagram after the wirefram was developed. The UML diagram would consist of the different React components, and the states and props each component would have. This diagram is useful for keeping the structure of the application organized and was a visual for what and how components interact with others.
            </p>

            &nbsp;

            <h2>Implementation</h2>
            <p>
                You may notice that I chose not to use CDNs for any frameworks or libraries. To avoid having to link to external sources (especially when our projects or environment works with sensitive information), I instead opted to store a local copy of the code. Although this may prevent newer releases of patches and optimizations to be applied to our application, this ensures our application remains functional without changes (while supported).
            </p>
            <div className="linkTitle">Bootstrap: <a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/">https://getbootstrap.com/docs/5.1/getting-started/introduction/</a></div>
            <p>
                - Bootstrap is a modern framework used for styling and comes out-of-the-box with responsive designs for our applications. I utilize the classes Bootstrap supports, overwriting any custom changes I would like to make, and Bootstrap takes care of the rest.
            </p>

            &nbsp;

            <div className="linkTitle">SASS: <a href="https://sass-lang.com/">https://sass-lang.com/</a></div>
            <p>
                - I utilized SASS with Bootstrap to optimize readibility, reduce redundancy, and capitalize Bootstrap's SASS variables, media queries, and mixins.
            </p>

            &nbsp;

            <div className="linkTitle">Font Awesome: <a href="hhttps://fontawesome.com/">https://fontawesome.com/</a></div>
            <p>
                - For the icons in the application, Font Awesome is a library with a broad selection of customizable icons. To mitigate against the large and wordy buttons in a list, I used well-known and relatable icons for a clean user-friendly view of the available actions.
            </p>


        </div>
    )

}

export default About