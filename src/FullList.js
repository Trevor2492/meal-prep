import React from "react";

const FullList = ({ meals }) => {
  return (
    <div>
      {meals.map((meal) => (
        <div key={meal.name}>{meal.name}</div>
      ))}
    </div>
  );
};

export default FullList;
