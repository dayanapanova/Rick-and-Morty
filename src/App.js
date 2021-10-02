import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Characters from './components/Characters';
import Episodes from './components/Episodes';
import Home from './components/Home'
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/episodes' component={Episodes}></Route>
        <Route exact path='/characters' component={Characters}></Route>
      </Switch>
    </Router>
  );
}

export default App;
