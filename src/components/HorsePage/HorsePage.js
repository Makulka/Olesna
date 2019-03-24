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
            <p>{this.props.paragraph}</p>
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
        <div><img src={Linda} alt="Linda"/></div>
        <div><img src={Zlatka} alt="Zlatka"/></div>
        <div><img src={Borka} alt="Borka"/></div>
        <div><img src={Betty} alt="Betty"/></div>
        <div><img src={Zorka} alt="Zorka"/></div>
        <div><img src={Bara} alt="Bara"/></div>
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
const englishParagraph = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

const czechTitle = "Nase kone";
const czechParagraph = "Nalezame se v nadherne krajine vesnicky Olesna. Kdybyste nahodou nekdy jeli kolem, tak se u nas stavte a prijdte se podivat na nasi chaloupku a kone. I nasi pejsci vas moc radi uvidi."
