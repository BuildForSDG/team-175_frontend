import React from 'react';
import './App.scss';
import Login from './pages/login'
import Index from './pages/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Routing =()=>{
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
       
      </Switch>
    </Router>

  );
}

function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
