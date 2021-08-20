import "./App.css";
import mealList from "./api";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CachedIcon from "@material-ui/icons/Cached";
import Typography from "@material-ui/core/Typography";
import RefreshIcon from "@material-ui/icons/Refresh";
import NewInput from "./NewInput";
import FullList from "./FullList";
import firebase from "./firebase";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  typography: {
    color: "#464A45",
  },
}));

// References the 'meals' collection from firestore
const ref = firebase.firestore().collection("meals");

function App() {
  let [monday, setMonday] = useState(0);
  let [tuesday, setTuesday] = useState(0);
  let [wednesday, setWednesday] = useState(0);
  let [thursday, setThursday] = useState(0);
  let [friday, setFriday] = useState(0);
  let [saturday, setSaturday] = useState(0);
  let [sunday, setSunday] = useState(0);
  const [meals, setMeals] = useState([]);
  const [fullListShown, setFullListShown] = useState(false);
  const classes = useStyles();

  // Gets the 'meals' list from firestore database, listens for changes, and updates in realtime when new meals are added
  const getMeals = () => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      return setMeals(items);
    });
  };

  useEffect(() => {
    getMeals();
  }, []);

  const handleClick = () => {
    // sets each day of the week to be a random integer that represents an index number from 'meals'

    setMonday(Math.floor(Math.random() * meals.length));
    setTuesday(Math.floor(Math.random() * meals.length));
    setWednesday(Math.floor(Math.random() * meals.length));
    setThursday(Math.floor(Math.random() * meals.length));
    setFriday(Math.floor(Math.random() * meals.length));
    setSaturday(Math.floor(Math.random() * meals.length));
    setSunday(Math.floor(Math.random() * meals.length));
    return;
  };

  // sets an individual day of the week to a random integer from mealList
  const handleSingleRefresh = (dayOfWeek) => {
    switch (dayOfWeek) {
      case "m":
        setMonday(Math.floor(Math.random() * meals.length));
        break;
      case "t":
        setTuesday(Math.floor(Math.random() * meals.length));
        break;
      case "w":
        setWednesday(Math.floor(Math.random() * meals.length));
        break;
      case "th":
        setThursday(Math.floor(Math.random() * meals.length));
        break;
      case "f":
        setFriday(Math.floor(Math.random() * meals.length));
        break;
      case "sat":
        setSaturday(Math.floor(Math.random() * meals.length));
        break;
      case "sun":
        setSunday(Math.floor(Math.random() * meals.length));
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Typography
          className={classes.typography}
          style={{ marginTop: 15 }}
          variant="h4"
          gutterBottom
        >
          This week we're having:
        </Typography>
        <div className="list">
          <Typography className={classes.typography} variant="h5" gutterBottom>
            Monday: {mealList[monday]}{" "}
            <Button>
              <RefreshIcon onClick={() => handleSingleRefresh("m")} />
            </Button>
          </Typography>
          <Typography className={classes.typography} variant="h5" gutterBottom>
            Tuesday: {mealList[tuesday]}{" "}
            <Button>
              <RefreshIcon onClick={() => handleSingleRefresh("t")} />
            </Button>
          </Typography>
          <Typography className={classes.typography} variant="h5" gutterBottom>
            Wednesday: {mealList[wednesday]}{" "}
            <Button>
              <RefreshIcon onClick={() => handleSingleRefresh("w")} />
            </Button>
          </Typography>
          <Typography className={classes.typography} variant="h5" gutterBottom>
            Thursday: {mealList[thursday]}{" "}
            <Button>
              <RefreshIcon onClick={() => handleSingleRefresh("th")} />
            </Button>
          </Typography>
          <Typography className={classes.typography} variant="h5" gutterBottom>
            Friday: {mealList[friday]}{" "}
            <Button>
              <RefreshIcon onClick={() => handleSingleRefresh("f")} />
            </Button>
          </Typography>
          <Typography className={classes.typography} variant="h5" gutterBottom>
            Saturday: {mealList[saturday]}{" "}
            <Button>
              <RefreshIcon onClick={() => handleSingleRefresh("sat")} />
            </Button>
          </Typography>
          <Typography className={classes.typography} variant="h5" gutterBottom>
            Sunday: {mealList[sunday]}{" "}
            <Button>
              <RefreshIcon onClick={() => handleSingleRefresh("sun")} />
            </Button>
          </Typography>
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<CachedIcon />}
          onClick={() => handleClick()}
        >
          Randomize All
        </Button>
        <NewInput />

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => setFullListShown(!fullListShown)}
        >
          {fullListShown ? "Hide List" : "Show Full List"}
        </Button>
        {fullListShown && <FullList meals={meals} />}
      </div>
    </div>
  );
}

export default App;
