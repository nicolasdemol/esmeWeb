import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Partners from './components/Partners';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/projects" component={ Projects }/>
          <Route path="/partners" component={ Partners }/>
          <Route path="/login" component={ Login }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
