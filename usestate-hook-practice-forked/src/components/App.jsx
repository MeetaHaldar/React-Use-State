import React, { useState } from "react";

function App() {
  const [count, countChange] = useState(new Date().toLocaleTimeString());
  function ShowTime() {
    countChange(new Date().toLocaleTimeString());
  }
  setInterval(ShowTime, 1000);
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={ShowTime}>Get Time</button>
    </div>
  );
}

export default App;
