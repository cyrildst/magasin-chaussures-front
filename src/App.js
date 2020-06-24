import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Shoes from './components/Shoes'
import AddShoe from './components/AddShoe'
import Menu from './components/Menu'
import ErrorPage from './components/ErrorPage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      
      <Menu />

      <Switch>
        <Route exact path="/" component={Shoes} />
        <Route path="/add" component={AddShoe} />
        <Route path="/shoe/:id" children={AddShoe} />
        <Route component={ErrorPage} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
