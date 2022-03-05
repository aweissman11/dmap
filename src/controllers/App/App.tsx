import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { Home } from '../../components/Home';
import { Nav } from '../../components/Nav';
import { Map } from '../Map';
import { AppStateProvider } from '../../context/AppCtx';
import { default_theme } from './theme';
import { Footer } from '../../components/Footer';

function App() {
  return (
    <ThemeProvider theme={default_theme}>
      <AppStateProvider>
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
      </AppStateProvider>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
