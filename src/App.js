import "./App.css";
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
  let [tuesday, setTuesday] = useState(1);
  let [wednesday, setWednesday] = useState(2);
  let [thursday, setThursday] = useState(3);
  let [friday, setFriday] = useState(4);
  let [saturday, setSaturday] = useState(5);
  let [sunday, setSunday] = useState(6);
  const [meals, setMeals] = useState(["", "", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [fullListShown, setFullListShown] = useState(false);
  const classes = useStyles();

  // Gets the 'meals' list from firestore database
  const getMeals = () => {
    setIsLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setMeals(items);
    });
    setIsLoading(false);
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

  if (isLoading) {
    return <p>Data is Loading...</p>;
  }

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
            Monday: {meals[monday].name}{" "}
            <Button>
              <RefreshIcon onClick={() => handleSingleRefresh("m")} />
            </Button>
          </Typography>
          <Typography className={classes.typography} variant="h5" gutterBottom>
            Tuesday: {meals[tuesday].name}{" "}
            <Button>
              <RefreshIcon onClick={() => handleSingleRefresh("t")} />
            </Button>
          </Typography>
          <Typography className={classes.typography} variant="h5" gutterBottom>
            Wednesday: {meals[wednesday].name}{" "}
            <Button>
              <RefreshIcon onClick={() => handleSingleRefresh("w")} />
            </Button>
          </Typography>
          <Typography className={classes.typography} variant="h5" gutterBottom>
            Thursday: {meals[thursday].name}{" "}
            <Button>
              <RefreshIcon onClick={() => handleSingleRefresh("th")} />
            </Button>
          </Typography>
          <Typography className={classes.typography} variant="h5" gutterBottom>
            Friday: {meals[friday].name}{" "}
            <Button>
              <RefreshIcon onClick={() => handleSingleRefresh("f")} />
            </Button>
          </Typography>
          <Typography className={classes.typography} variant="h5" gutterBottom>
            Saturday: {meals[saturday].name}{" "}
            <Button>
              <RefreshIcon onClick={() => handleSingleRefresh("sat")} />
            </Button>
          </Typography>
          <Typography className={classes.typography} variant="h5" gutterBottom>
            Sunday: {meals[sunday].name}{" "}
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
