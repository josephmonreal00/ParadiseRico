import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Store from './components/Store';
import Links from './components/Links';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/about" component={ About }/>
          <Route path="/portfolio" component={ Portfolio }/>
          <Route path="/store" component={ Store }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
