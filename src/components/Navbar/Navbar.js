import React, {Component} from 'react';
import './Navbar.scss';
import HomePage from '../HomePage/HomePage';
import CottagePage from '../CottagePage/CottagePage';
import HorsePage from '../HorsePage/HorsePage';
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
      var navbarBrand = "At Eliska's and Fanda's";
      var home = "Home";
      var village = "Village Olesna";
      var cottage = "Our cottage";
      var horses = "Our horses";
    } else {
      var iconClass = "czech-flag";
      var navbarBrand = "U Elisky a Fandy";
      var home = "Uvod";
      var village = "Obec Olesna";
      var cottage = "Nase Chalupa";
      var horses = "Nase kone";
    }    
    return (
      <div>
        {/* <nav className="navbar navbar-color navbar-expand-lg navbar-margin"> */}
        <nav className="navbar navbar-dark navbar-color navbar-expand-lg navbar-margin">
          <div className="navbar-brand brand">{navbarBrand}</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <NavLink to="/home" activeClassName="active" className="nav-link">{home}</NavLink> 
              <NavLink to="/cottage" activeClassName="active" className="nav-link">{cottage}</NavLink>
              <NavLink to="/horses" activeClassName="active" className="nav-link">{horses}</NavLink>                   
            </ul>  
            <a className="nav-link" href="https://www.olesna-be.cz/">{village}</a>
			      <button className={"language-button "+ iconClass} onClick={this.handleButtonClick}></button>			
          </div>        
        </nav>
        <Route exact path="/home" render={(routeProps) => (< HomePage {...routeProps} english={this.state.english}/>)}/>
        <Route path="/cottage" render={(routeProps) => (< CottagePage {...routeProps} english={this.state.english}/>)}/>
        <Route path="/horses" render={(routeProps) => (< HorsePage {...routeProps} english={this.state.english}/>)}/>
      </div>
    )
  }
}


export default Navbar;




// https://m.pardel.net/react-and-bootstrap-4-part-1-setup-navigation-d4767e2ed9f0