import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';

import DocPage from './components/DocPage/DocPage'

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Router>
        <Switch>
          <Route exact path="/:id?" component={DocPage} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
