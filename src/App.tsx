import { useState } from "react";

import reactLogo from "./assets/react.svg";
import PythonFileRunner from "./PythonFileRunner";
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PythonFileRunner />
    </>
  );
}

export default App;
