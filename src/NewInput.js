import React from "react";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import firebase from "./firebase";
import "./NewInput.css";

const ref = firebase.firestore().collection("meals");

const NewInput = () => {
  const [item, setItem] = useState("");

  const handleClick = async () => {
    item
      ? ref
          .doc(item)
          .set({
            name: item,
          })
          .then(() => {
            alert(item + " has been added to the list");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          })
      : alert("You have to type something in");
    setItem("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" style={{ marginTop: 45, color: "#464A45" }}>
        Add a new item to the list here:{" "}
      </Typography>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add New Item"
        type="text"
        className="input"
      />
      <Button variant="contained" color="primary" onClick={() => handleClick()}>
        Submit Item
      </Button>
    </div>
  );
};

export default NewInput;
