import React from "react";
import "./FullList.css";

const FullList = ({ meals }) => {
  return (
    <div className="fullList">
      {meals.map((meal) => (
        <div key={meal.name}>{meal.name}</div>
      ))}
    </div>
  );
};

export default FullList;
