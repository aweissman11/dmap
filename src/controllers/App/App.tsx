import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { Home } from '../../components/Home';
import { Nav } from '../../components/Nav';
import { Map } from '../Map';
import { AppStateProvider } from '../../context/AppCtx';
import { default_theme } from './theme';
import { Footer } from '../../components/Footer';
import { PrintPage } from '../../components/PrintPage';
import { FourOFourPage } from '../../components/FourOFourPage';

function App() {
  return (
    <ThemeProvider theme={default_theme}>
      <AppStateProvider>
        <div className="App">
          <Router>
            <Switch>
              <Route path="/print">
                <PrintPage />
              </Route>
              <Route exact path="/map/:step?">
                <Nav />
                <Map />
              </Route>
              <Route exact path="/">
                <Nav />
                <Home />
              </Route>
              <Route path="/">
                <Nav />
                <FourOFourPage />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </div>
      </AppStateProvider>
    </ThemeProvider>
  );
}

export default App;
