import "./App.css";
import mealList from "./api";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CachedIcon from "@material-ui/icons/Cached";
import Typography from "@material-ui/core/Typography";
import RefreshIcon from "@material-ui/icons/Refresh";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  typography: {
    color: "#464A45",
  },
}));

function App() {
  let [monday, setMonday] = useState(0);
  let [tuesday, setTuesday] = useState(0);
  let [wednesday, setWednesday] = useState(0);
  let [thursday, setThursday] = useState(0);
  let [friday, setFriday] = useState(0);
  let [saturday, setSaturday] = useState(0);
  let [sunday, setSunday] = useState(0);
  const classes = useStyles();

  const handleClick = () => {
    // sets each day of the week to be a random integer that represents an index number from mealList

    setMonday(Math.floor(Math.random() * mealList.length));
    setTuesday(Math.floor(Math.random() * mealList.length));
    setWednesday(Math.floor(Math.random() * mealList.length));
    setThursday(Math.floor(Math.random() * mealList.length));
    setFriday(Math.floor(Math.random() * mealList.length));
    setSaturday(Math.floor(Math.random() * mealList.length));
    setSunday(Math.floor(Math.random() * mealList.length));
    return;
  };

  return (
    <div className="App">
      <Typography className={classes.typography} variant="h4" gutterBottom>
        This week we're having:
      </Typography>
      <Typography className={classes.typography} variant="h5" gutterBottom>
        Monday: {mealList[monday]}{" "}
        <Button>
          <RefreshIcon />
        </Button>
      </Typography>
      <Typography className={classes.typography} variant="h5" gutterBottom>
        Tuesday: {mealList[tuesday]}{" "}
        <Button>
          <RefreshIcon />
        </Button>
      </Typography>
      <Typography className={classes.typography} variant="h5" gutterBottom>
        Wednesday: {mealList[wednesday]}{" "}
        <Button>
          <RefreshIcon />
        </Button>
      </Typography>
      <Typography className={classes.typography} variant="h5" gutterBottom>
        Thursday: {mealList[thursday]}{" "}
        <Button>
          <RefreshIcon />
        </Button>
      </Typography>
      <Typography className={classes.typography} variant="h5" gutterBottom>
        Friday: {mealList[friday]}{" "}
        <Button>
          <RefreshIcon />
        </Button>
      </Typography>
      <Typography className={classes.typography} variant="h5" gutterBottom>
        Saturday: {mealList[saturday]}{" "}
        <Button>
          <RefreshIcon />
        </Button>
      </Typography>
      <Typography className={classes.typography} variant="h5" gutterBottom>
        Sunday: {mealList[sunday]}{" "}
        <Button>
          <RefreshIcon />
        </Button>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<CachedIcon />}
        onClick={() => handleClick()}
      >
        Randomize All
      </Button>
    </div>
  );
}

export default App;
