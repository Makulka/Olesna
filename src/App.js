import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './css/App.scss';
import './css/variables.scss';
// import HomePage from './components/HomePage/HomePage';
// import TicTacToePage from './components/TicTacToe/TicTacToePage';
// import GithubPage from './components/Github/GithubPage';



class App extends Component {  
  render() {
    return (
      <div className="wrapper">
        <div className="container main-content-container">
          < Navbar /> 
        </div>        
      </div>
    );
  }
}

export default App;
