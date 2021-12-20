import React, { useState } from "react"

import HeaderMenu from "./HeaderMenu.js"
import Content from "./Content.js"
import Footer from "./Footer.js"

function App() {

  const [view, setView] = useState("home");

  return (
    <div className="app min-vw-100 min-vh-100 d-flex flex-column justify-content-between">
      <div className="header">
          <nav className="navbar navbar-dark bg-dark">
              <div className="container-fluid text-white">
                  <a className="nav-brand text-black" href="./">
                      <div className="fullCircle">
                      </div>
                  </a>
                  <HeaderMenu 
                    setView={setView}
                  />
              </div>
          </nav>
      </div>
      <Content 
        view={view}
        setView={setView}
      />
      <Footer />
    </div>
  );
}

export default App;
