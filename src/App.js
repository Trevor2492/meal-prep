import "./App.css";
import mealList from "./api";
import { useState } from "react";

function App() {
  let [meal, setMeal] = useState(0);

  const handleClick = () => {
    // sets num to be a random integer that represents an index number from mealList
    let num = Math.floor(Math.random() * mealList.length);

    return setMeal(num);
  };

  return (
    <div className="App">
      <div>Tonight we're having: {mealList[meal]}</div>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
}

export default App;
