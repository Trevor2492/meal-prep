import React from "react";
import "./FullList.css";
import MealItem from "./MealItem";

const FullList = ({ meals }) => {
  return (
    <div className="fullList">
      {meals.map((meal) => (
        <MealItem meal={meal} key={meal.name} />
      ))}
    </div>
  );
};

export default FullList;
