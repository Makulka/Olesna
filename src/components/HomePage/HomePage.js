import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './HomePage.scss';

const Header = (props) => {
  return(
    <header className="header">         
      <h1>{props.title}</h1>           
    </header>
  );
}

const Main = (props) => {
  return (
    <main className="main"> 
      <p>{props.paragraph}</p>
    </main>
  );
}

const Slider = () => {
	
}

class HomePage extends Component {  
  render() {
	const english = this.props.english;
    return (
      <div>
      {english ? (
				<div className="container content">   
          < Header title={englishTitle}/>
          < Main paragraph={englishParagraph}/>  
        </div>
			) : (
				<div className="container content">   
          < Header title={czechTitle}/>
          < Main paragraph={czechParagraph}/>
        </div>		
      )}  
     </div>  
    );
  }
}

export default HomePage;

const englishTitle = "At Eliska and Fanda's";
const englishParagraph = "We are based in the beutiful location of the village Olesna. If you happen to be passing by, come and have a look at cottage and our horses. Our dogs will welcome you too."

const czechTitle = "U Elisky a Fandy";
const czechParagraph = "Nalezame se v nadherne krajine vesnicky Olesna. Kdybyste nahodou nekdy jeli kolem, tak se u nas stavte a prijdte se podivat na nasi chaloupku a kone. I nasi pejsci vas moc radi uvidi."
