// import logo from './logo.svg';
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'; // bootstrap
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; // route

import login from './Components/login/Login'
import home from './Components/pages/home'

function App() {
  const auth = localStorage.getItem('Token_Key')
  if (auth == null) {
    return <Router><Route exact path="/login" component={login} /><Redirect to="/login" /></Router>
  }else{
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home" component={home} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </div>
  );
  }
}

export default App;
