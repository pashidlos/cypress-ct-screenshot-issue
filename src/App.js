import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Drawer, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  drawerPaper: {
    position: "absolute",
  },
}));

function App() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={() => setOpen(!open)}>Open</Button>
      </header>

      <Drawer
        variant="persistent"
        anchor="top"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <h1>Test Test</h1>
      </Drawer>

      <Drawer
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <h1>Test</h1>
      </Drawer>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <h1>Test</h1>
      </Drawer>

      <Drawer
        variant="persistent"
        anchor="bottom"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <h1>Test</h1>
      </Drawer>
    </div>
  );
}

export default App;
