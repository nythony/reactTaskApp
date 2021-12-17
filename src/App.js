import React, { useState } from "react"

import Header from "./Header.js"
import TaskList from "./content/TaskList.js"
import Footer from "./Footer.js"

function App() {

  const [view, setView] = useState("home");

  return (
    <div className="app min-vw-100 min-vh-100 d-flex flex-column justify-content-between">
      <Header />
      <TaskList />
      <Footer />
    </div>
  );
}

export default App;
