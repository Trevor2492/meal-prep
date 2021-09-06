import { IconButton } from "@material-ui/core";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import React from "react";
import "./FullList.css";

const FullList = ({ meals }) => {
  return (
    <div className="fullList">
      {meals.map((meal) => (
        <div key={meal.name}>
          {meal.name}
          {/* <IconButton aria-label="delete">
            <HighlightOffRoundedIcon style={{ fontSize: 16 }} />
          </IconButton> */}
        </div>
      ))}
    </div>
  );
};

export default FullList;
