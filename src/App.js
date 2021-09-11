import React, { Component } from 'react';

import bg from './assets/images/bg.png';

import './App.css';
import Week from './Week';

class App extends Component {


  render() {  

    return (
      <div className="App" style={{backgroundImage:` url(${bg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}> 
        <div className="container" >
             <Week />     

        </div>
    
       
      </div>
    );
  }
}

export default App;
