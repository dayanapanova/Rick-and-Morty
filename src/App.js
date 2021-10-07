import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Characters from './containers/Characters';
import Episodes from './containers/Episodes';
import Navigation from './components/Navigation';
function App() {

  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
      <Switch>
        <Route exact path='/' component={Characters}></Route>
        <Route exact path='/episodes' component={Episodes}></Route>
        <Route exact path='/characters' component={Characters}></Route>
      </Switch>
    </Router>
  );
}

export default App;
