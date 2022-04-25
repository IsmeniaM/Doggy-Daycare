import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Registration from './components/pages/Register';
import Info from './components/pages/Info'





function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/registration' component={Registration} />
        <Route path='/info' component={Info} />
        <Route path='/' exact />
      </Switch>
    </Router>
    </>
   
    
  );
}

export default App;
