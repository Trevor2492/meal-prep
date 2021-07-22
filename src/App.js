import "./App.css";
import mealList from "./api";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CachedIcon from "@material-ui/icons/Cached";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
  let [meal, setMeal] = useState(0);
  const classes = useStyles();

  const handleClick = () => {
    // sets num to be a random integer that represents an index number from mealList
    let num = Math.floor(Math.random() * mealList.length);

    return setMeal(num);
  };

  return (
    <div className="App">
      <div>Tonight we're having: {mealList[meal]}</div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<CachedIcon />}
        onClick={() => handleClick()}
      >
        Randomize
      </Button>
    </div>
  );
}

export default App;
