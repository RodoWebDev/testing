import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/css/fontawesome.min.css';
import './App.css';
import Chat from './containers/Chat';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;
