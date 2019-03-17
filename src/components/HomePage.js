import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/HomePage.scss';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()}
  }
  componentDidMount() {
    this.timeInterval = setInterval(
      () => this.tick(), 1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }
  tick() {
    this.setState(
      {time: new Date()}
    ) 
  }
  render() {
    return(
      <p className="time">{this.state.time.toLocaleTimeString()}</p>
    );
  }
}

const Header = () => {
  return(
    <header className="header">
      <div className="images">
        <img src={logo} alt="logo" />
        <img src={logo} className="moving-logo" alt="logo" />
      </div>
      <h1>My React page</h1>
      <img src={logo}  alt="logo" />            
    </header>
  );
}

const Main = () => {
  return (
    <main className="main"> 
      <p>Hi, thank you for checking my portfolio. < br/>So far I have included a tic-tac-toe game. < br/> More content is coming soon!
      </p>
      <img src={logo}  className="mobile-logo" alt="logo" />
    </main>
  );
}

class HomePage extends Component {
  render() {
    return (      
      <div className="container content">  
        < Clock />
        < Header />
        < Main />   
      </div>      
    );
  }
}

export default HomePage;