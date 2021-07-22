import "./App.css";
import mealList from "./api";
import { useState } from "react";

function App() {
  let [meal, setMeal] = useState(0);

  const handleClick = () => {
    meal !== mealList.length - 1 ? setMeal(meal + 1) : setMeal((meal = 0));
  };

  return (
    <div className="App">
      <div>Tonight we're having: {mealList[meal]}</div>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
}

export default App;
