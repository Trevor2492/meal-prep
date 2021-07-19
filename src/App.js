import "./App.css";
import mealList from "./api";
import { useState, useEffect } from "react";

function App() {
  const [meal, setMeal] = useState("");

  useEffect(() => {}, []);

  const handleClick = () => {
    alert("you clicked");
  };

  return (
    <div className="App">
      <div>Tonight we're having: {mealList[1]}</div>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
}

export default App;
