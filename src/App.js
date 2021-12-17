import React, { useState } from "react"

import Header from "./Header.js"

function App() {

  const [view, setView] = useState("home");

  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
