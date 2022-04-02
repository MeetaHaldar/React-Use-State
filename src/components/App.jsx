import React from "react";

function App() {
  const [count, countChange] = React.useState(0);
  function increase() {
    countChange(count + 1);
    console.log(countChange);
  }
  function decrease() {
    countChange(count - 1);
  }

  return (
    <div className="container">
      <h1 className="main">React Use state Hooks</h1>
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
