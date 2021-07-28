import React from 'react';
import { AppBar, Button, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ToolBar from '@material-ui/core/Toolbar';
import './App.css';
import { makeStyles } from '@material-ui/core';

function App() {
  const classes: any = useStyles();
  return (
    <>
      <AppBar position="static">
        <ToolBar>
          <IconButton edge="start" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Budget Tracker
          </Typography>
          <Button className={classes.link}>Sign In</Button>
          <Button className={classes.link}>Sign Up</Button>
        </ToolBar>
      </AppBar>
    </>
  );
}

const useStyles = makeStyles((theme: any): any => ({
  menuButton: {
    color: 'white',
  },
  link: {
    color: 'white',
  },
}));

export default App;
