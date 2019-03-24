import React, { Component } from 'react';
import './HomePage.scss';
import cottage1 from './images/cottage1.JPG';
import Linda from './images/Linda.JPG';
import Zlatka from './images/Zlatka.JPG';
import Borka from './images/Borka.JPG';
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
        <div><img src={cottage1} alt="Olesna"/></div>
        <div><img src={Linda} alt="Olesna"/></div>
        <div><img src={Zlatka} alt="Olesna"/></div>
        <div><img src={Borka} alt="Olesna"/></div>
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

const englishTitle = "At Eliska's and Fanda's";
const englishParagraph = "We are based in the beutiful location of the village Olesna. If you happen to be passing by, come and have a look at cottage and our horses. Our dogs will welcome you too. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, v"

const czechTitle = "U Elišky a Fandy";
const czechParagraph = "Nalezame se v nadherne krajine vesnicky Olesna. Kdybyste nahodou nekdy jeli kolem, tak se u nas stavte a prijdte se podivat na nasi chaloupku a kone. I nasi pejsci vas moc radi uvidi. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, v"
