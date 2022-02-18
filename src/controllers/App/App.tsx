import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import Home from '../Home';
import Nav from '../../components/Nav';
import Map from '../Map';

import { default_theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={default_theme}>
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/map/:step?">
              <Map />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
