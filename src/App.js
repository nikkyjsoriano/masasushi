import React from 'react';
import { Container, Typography, AppBar, Toolbar, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Sushi Restaurant
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Our Sushi Restaurant
      </Typography>
      <Typography variant="body1" align="center">
        Enjoy the best sushi in town.
      </Typography>
    </Container>
  );
}

export default App;
