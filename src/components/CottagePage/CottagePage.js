import React, { Component } from 'react';
import cottage1 from './images/cottage1.JPG';
import cottage2 from './images/cottage2.JPG';
import cottage3 from './images/cottage3.JPG';
import cottage4 from './images/cottage4.JPG';
import cottage5 from './images/cottage5.JPG';
import cottage6 from './images/cottage6.JPG';
import cottage7 from './images/cottage7.JPG';
import './CottagePage.scss';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

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
        <img className = "cottage-image" src={cottage1} alt="cottage"/>
        <p className="text">{props.paragraph}</p>
      </div>      
    </main>
  );
}

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      //autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false
          }
        }       
      ]
    };
    return (
      <Slider {...settings}>
        <div><img src={cottage7} alt="cottage"/></div>
        <div><img src={cottage2} alt="cottage"/></div>
        <div><img src={cottage3} alt="cottage"/></div>
        <div><img src={cottage4} alt="cottage"/></div>
        <div><img src={cottage5} alt="cottage"/></div>
        <div><img src={cottage6} alt="cottage"/></div>
        <div><img src={cottage1} alt="cottage"/></div>
      </Slider>
    );
  }
}

class CottagePage extends Component {  
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

export default CottagePage;

const englishTitle = "Our cottage";
const englishParagraph = "Olešná 12 u Hořovic is a homestead from the end of 18th century. It is an example of a unique European village architecture. It is a part of the village preservation area and it itself is considered as an immovable cultural heritage (r.c. 2-368). This homestead consists of three parts, with the main timbered living quaters on the right, ‚výměnek‘ with a small workshop on the left and a large stone-wooden barn at the rear. The main part consists of a large room, a small room, an entry hallway, the so called black kitchen with an access to the original stove and smoker, the current kitchen with a small storeroom. The living quaters are constructed entirely out of timber and are linked to a relatively large cowshed and sheep pen. Výměnek was originally designed for retired farm/house owners who spent the rest of their life on the property with guaranteed bed and board after they had transferred their property to a new owner (usually family member).  The homestead is occupied year round by us – the desendants of the original occupants and we regularly renovate it according to its original state with the financal help from the Ministry of Culture ČR and The National Heritage Institute. During reconstructions our repairmen try to use original techniques, especially when it comes to stone and wood work. The homestead still has some of its original furniture, including a table, chairs, a bench and a cupboard."
const czechTitle = "Naše chalupa";
const czechParagraph = "Olešná u Hořovic č.p. 12 je zemědělská usedlost z konce 18.století, patřící mezi evropské unikáty vesnické architektury. Je nedílnou součástí vesnické  památkové zóny Olešná a sama je uznána jako nemovitá kulturní památka (r.č. 2-368). Tato zemědělská usedlost se skládá ze tří částí, napravo je hlavní roubená obytná část, skládající se z velké místnosti, komory, bývalé černé kuchyně se zachovalým vstupem do pece a udírny a nynější kuchyně, na kuchyni navazuje malá špajzka. Obytná část, která je celá roubená, pokračuje poměrně velikým kamenným chlévem a ovčínem. Nalevo se nachází tzv, výměnek s malou dílnou, který je celý roubený. Usedlost je uzavřena velikou stodolou, z části kamennou a z části dřevěnou. Usedlost je celoročně obývaná potomky původních majitelů, kteří se snaží o její udržování. Za podpory Ministerstva kultury ČR a Památkového ústavu probíhá téměř neustále její rekonstrukce. Všichni se snaží při opravách a rekonstrukci používat původní techniky, hlavně tesařské a kamenické. Také vybavení místností zůstalo částečně původní, stůl, židle, lavice i skříně ."
