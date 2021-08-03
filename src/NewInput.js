import React from "react";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";

const NewInput = () => {
  const [item, setItem] = useState("");

  const handleClick = () => {
    item ? alert("You added: " + item) : alert("You must enter a value");
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
        style={{
          margin: 15,
          color: "#464A45",
          minWidth: "70%",
          maxWidth: "85%",
          height: "35px",
          border: "none",
          borderRadius: "10px",
          textAlign: "center",
          outline: "none", //prevents highlight on input focus
          fontSize: "30px",
        }}
      />
      <Button variant="contained" color="primary" onClick={() => handleClick()}>
        Submit Item
      </Button>
    </div>
  );
};

export default NewInput;
