import React from "react";
import { IconButton } from "@material-ui/core";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import firebase from "./firebase";

const ref = firebase.firestore().collection("meals");

const MealItem = ({ meal }) => {
  const handleClick = () => {
    ref
      .doc(meal.name)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
    alert(meal.name + " was deleted");
  };

  return (
    <div>
      {meal.name}
      <IconButton onClick={() => handleClick()}>
        <HighlightOffRoundedIcon style={{ fontSize: 17 }} />
      </IconButton>
    </div>
  );
};

export default MealItem;
