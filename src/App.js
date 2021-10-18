import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Characters from './containers/Characters';
import Episodes from './containers/Episodes';
import SingleCharacter from './containers/SingleCharacters'
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
      <Switch>
        <Route exact path='/' component={Episodes} />
        <Route exact path='/episodes' component={Episodes} />
        <Route exact path='/characters' component={Characters} />
        <Route path='/characters/:id' exact={true} component={SingleCharacter} />
      </Switch>
    </Router>
  );
}

export default App;
