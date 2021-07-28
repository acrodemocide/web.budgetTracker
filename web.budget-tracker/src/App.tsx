import { AppBar, Button, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ToolBar from '@material-ui/core/Toolbar';
import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <AppBar position="static">
        <ToolBar>
          <IconButton edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Budget Tracker
          </Typography>
          <Button>Sign In</Button>
          <Button>Sign Up</Button>
        </ToolBar>
      </AppBar>
    </>
  );
}

export default App;
