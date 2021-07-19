import "./App.css";
import mealList from "./api";
import { useState, useEffect } from "react";

function App() {
  let [meal, setMeal] = useState(0);

  const handleClick = () => {
    if (meal !== mealList.length) {
      return setMeal(meal++);
    }
    return (meal = 0);
  };

  return (
    <div className="App">
      <div>Tonight we're having: {mealList[meal]}</div>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
}

export default App;
