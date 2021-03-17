import React from 'react'
import { Route } from 'react-router';
import { Cart, Header, Home } from './components';

import './scss/app.scss'


function App() {


  

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
