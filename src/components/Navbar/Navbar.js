import React, {Component} from 'react';
import './Navbar.scss';
import HomePage from '../HomePage/HomePage';
// import TicTacToePage from '../TicTacToe/TicTacToePage';
// import GithubPage from '../Github/GithubPage';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
	  super(props);
	  this.state = {english: true };
	  this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick() {
    this.setState({english: !this.state.english})
  }
  render() {    
    if (this.state.english) {
      var iconClass = "english-flag";
    } else {
      var iconClass = "czech-flag";
    }    
    return (
      <div>
        <nav className="navbar navbar-color navbar-dark navbar-expand-lg ">
          <div className="navbar-brand brand">React</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <NavLink to="/" activeClassName="active" className="nav-link">Home</NavLink>                    
            </ul>  
            <a className="nav-link portfolio-link" href="https://www.olesna-be.cz/">Village Olesna</a>
			      <button className={"language-button "+ iconClass} onClick={this.handleButtonClick}></button>			
          </div>        
        </nav>
        <Route path="/" render={(routeProps) => (< HomePage {...routeProps} english={this.state.english}/>)}/>
      </div>
    )
  }
}


export default Navbar;




// https://m.pardel.net/react-and-bootstrap-4-part-1-setup-navigation-d4767e2ed9f0