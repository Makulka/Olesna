import React, { Component } from 'react';
import Linda from './images/Linda.JPG';
import Zlatka from './images/Zlatka.JPG';
import Borka from './images/Borka.JPG';
import Betty from './images/Betty.JPG';
import Zorka from './images/Zorka.JPG';
import Bara from './images/Bara.JPG';
import './HorsePage.scss';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from "react-slick";
import horse1 from './images/horse1.JPG'
import horse2 from './images/horse2.JPG'
import horse3 from './images/horse3.JPG'
import horse4 from './images/horse4.JPG'
import horse5 from './images/horse5.JPG'
import horse6 from './images/horse6.JPG'

const Header = (props) => {
  return(
    <header className="header">         
      <h1>{props.title}</h1>           
    </header>
  );
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {horse: Linda}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const name = e.target.name;
    this.setState({
      horse: name
    });
  }
  
  render() {
    return (
      <main className="main"> 

        <div className="row justify-content-md-center horse-selection-row">
          <div className="col-md-10">
            <div className="row justify-content-md-center align-items-center">
              <div className="col-md-4 col-lg-2 horse-buttons">
                <button name={Linda} ref="button" onClick={this.handleClick} className={this.state.horse === Linda ? "selected" : ""}>Linda</button>
                <button name={Borka} ref="button" onClick={this.handleClick} className={this.state.horse === Borka ? "selected" : ""}>Borka</button>
                <button name={Zlatka} onClick={this.handleClick} className={this.state.horse === Zlatka ? "selected" : ""}>Zlatka</button>
                <button name={Betty} onClick={this.handleClick} className={this.state.horse === Betty ? "selected" : ""}>Betty</button>
                <button name={Zorka} onClick={this.handleClick} className={this.state.horse === Zorka ? "selected" : ""}>Zorka</button>
                <button name={Bara} onClick={this.handleClick} className={this.state.horse === Bara ? "selected" : ""}>Bara</button>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4">
                <img src={this.state.horse} className="horse-image" alt="horse"/>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-md-center">
          <div className="col-md-10" >
            <p className="text">{this.props.paragraph}</p>
          </div> 
        </div>     
      </main>
    );
  }  
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
        <div><img src={horse1} alt="horse"/></div>
        <div><img src={horse2} alt="horse"/></div>
        <div><img src={horse3} alt="horse"/></div>
        <div><img src={horse4} alt="horse"/></div>
        <div><img src={horse5} alt="horse"/></div>
        <div><img src={horse6} alt="horse"/></div>
      </Slider>
    );
  }
}


class HorsePage extends Component {  
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

export default HorsePage;

const englishTitle = "Our Horses";
const englishParagraph = "The barn is currently inhabited by six horses, with five of them being of a breed of Czech-Moravian Belgian horse and one is a Noriker. Bora was born on 22nd March 2014 and is purebred and of the color of chestnut. Bety was born on 7th June 2008 and is purebred and dark ginger. She has a doughter Bára that was born on 23rd March 2018. Zlatka was born on 19th May 2008. She is also purebred and ginger. She has a daughter called Zorka born on 9th March 2018. Linda was born on 4th May 2009 and she is a Noriker, of the colour of a light chestnut. We keep the horses just for our pleasure. Actually you could say that they are the masters of the whole estate and in charge. The only time they are busy is in May when we dress them and they set off to celebrate the old Czech spring traddition called máje in the surrounding villages. We also have two dogs – Dastik, an old dachshund and Giftik, probably a beagle, that someone threw out in front of the local pub. We cannot forget two cats, tabby Zuzanka and three-colored Františka. You might also spot a few mice around the yard and in the kitchen and several magpies in the trees."

const czechTitle = "Naše kone";
const czechParagraph = "Chlév je obydlen v současné době 6 koňmi, jedná se o plemeno česko-moravského belgického koně a jednu noričku. Bora:  nar. 22.3.2014, barvy prokvetlé ryzky, plnopůvodová. Bety: nar.7.6.2008, tmavá ryzka, plnopůvodová, zařazená do genových zdrojů. Bára: nar.  23.3-2018, dcera Bety. Zlatka:  nar. 19.5.2008, ryzka, také zařazená do genových zdrojů. Zorka:  nar 9. 3. 2018, dcera Zlatky. Linda:  nar. 4.5.2009 norický kůň světlá ryzka. Koně chová majitel jen pro svou radost a potěšení, Ony jsou vlastně pánem celé usedlosti a jim se podřizuje veškerý chod domácnosti. Pouze každý květen jsou zaneprázdněné. To je majitel nastrojí a vyráží s nimi oslavovat staročeské máje po okolních vesnicích. Mimo koní zde ještě žijí dva psi. Dastík, starý jezevčík a Giftík, asi beagl, kterého někdo vyhodil před místní hospodou. Nesmíme zapomenout na dvě kočičky, mourovatou Zuzanku a tříbarevnou Františku, občas také přeběhne pár myšek po dvoře i v kuchyni a několik strak na stromě."
