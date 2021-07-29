import React from "react";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";

const NewInput = () => {
  const [item, setItem] = useState("");

  const handleClick = () => {
    alert("You added: " + item);
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
      <Typography variant="h6" style={{ marginTop: 45 }}>
        Add a new item to the list here:{" "}
      </Typography>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add New Item Here"
        type="text"
        style={{ margin: 15, width: "50%" }}
      />
      <Button variant="outlined" color="primary" onClick={() => handleClick()}>
        Submit Item
      </Button>
    </div>
  );
};

export default NewInput;
