import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Component1 from "./Component1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <strong>Migration talks</strong>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Component1>Ola mundo {count}</Component1>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </header>
    </div>
  );
}

export default App;
