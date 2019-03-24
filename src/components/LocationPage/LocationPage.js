import React, { Component } from 'react';
import './LocationPage.scss';
import MapContainer from './MapContainer';
import GoogleApiWrapper from './MapContainer';

const Header = (props) => {
  return(
    <header className="header">         
      <h1>{props.title}</h1>           
    </header>
  );
}

const Main = (props) => {
  return (
    <main className="main row "> 
      <div className="col-md-12">
        <p>{props.paragraph}</p>
      </div>      
    </main>
  );
}

class LocationPage extends Component {  
  render() {
	const english = this.props.english;
    return (
      <div>
        {english ? (
          <div className="content">   
            < Header title={englishTitle}/>
            < Main paragraph={englishParagraph}/>
          </div>
        ) : (
          <div className="content">   
            < Header title={czechTitle}/>
            < Main paragraph={czechParagraph}/>
          </div>		
        )} 
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8 google-map">
              < MapContainer />
            </div>
          </div>
        </div>
     </div> 
      
    );
  }
}

export default LocationPage;

const englishTitle = "Where to find us";
const englishParagraph = "Olešná 12 by Hořovice, Olešná 267 64, county Beroun, Czech Republic";

const czechTitle = "Kde nas najdete";
const czechParagraph = "Olešná 12 u Hořovic, Olešná 267 64, okres Beroun, Czech Republic";
