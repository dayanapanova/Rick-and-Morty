import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Episodes, Characters, SingleCharacter } from './containers';
import { Header } from './components';
import { theme } from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Box mt={12}>
          <Switch>
            <Route exact path='/' component={Characters} />
            <Route exact path='/episodes' component={Episodes} />
            <Route exact path='/characters' component={Characters} />
            <Route path='/characters/:id' exact={true} component={SingleCharacter} />
          </Switch>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
