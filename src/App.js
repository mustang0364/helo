import React, { Component } from 'react';
import Nav from './component/nav/Nav';
import routes from './route'
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
     {routes}
        
        <Nav/>
        {routes()}
  
   
      </div>
    );
  }
}

export default App;
