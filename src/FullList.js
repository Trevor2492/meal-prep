import React from "react";

const FullList = ({ meals }) => {
  return (
    <div>
      There are {meals.length} different meals
      {meals.map((meal) => (
        <div key={meal.name}>{meal.name}</div>
      ))}
    </div>
  );
};

export default FullList;
