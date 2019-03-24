import React, { Component } from 'react';
import './HomePage.scss';
import home1 from './images/home1.JPG';
import home2 from './images/home2.JPG';
import home3 from './images/home3.JPG';
import home4 from './images/home4.JPG';
import home5 from './images/home5.JPG';
import home6 from './images/home6.JPG';
import Slider from "react-slick";


const Header = (props) => {
  return(
    <header className="header">         
      <h1>{props.title}</h1>           
    </header>
  );
}

const Main = (props) => {
  return (
    <main className="main row justify-content-md-center"> 
      <div className="col-md-10">
        <p>{props.paragraph}</p>
      </div>      
    </main>
  );
}

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true, 
      cssEase: 'linear',
      pauseOnHover: false
    };
    return (
      <Slider {...settings}>
        <div><img src={home1} alt="Olesna"/></div>
        <div><img src={home2} alt="Olesna"/></div>
        <div><img src={home3} alt="Olesna"/></div>
        <div><img src={home4} alt="Olesna"/></div>
        <div><img src={home5} alt="Olesna"/></div>
        <div><img src={home6} alt="Olesna"/></div>
      </Slider>
    );
  }
}


class HomePage extends Component {  
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
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            <SimpleSlider />
          </div>
        </div>
     </div> 
      
    );
  }
}

export default HomePage;

const englishTitle = "At Eliška's and Fanda's";
const englishParagraph = "We are based in the beutiful location of the village Olešna. If you happen to be passing by, come and have a look at our cottage and horses. Our dogs will welcome you too."

const czechTitle = "U Elišky a Fandy";
const czechParagraph = "Nalézáme se v nádherné krajině vesničky Olešná. Kdybyste náhodou někdy jeli kolem, tak se u nás stavte a přijďte se podívat na naši chaloupku a koně. I naši pejsci vás moc rádi uvidí."
