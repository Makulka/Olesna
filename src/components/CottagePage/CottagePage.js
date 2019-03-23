import React, { Component } from 'react';
import cottage1 from '../../images/cottage1.JPG';
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
        <img className = "cottage-image" src={cottage1}/>
        <p>{props.paragraph}</p>
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
        <div><img src={cottage1}/></div>
        <div><img src={cottage1}/></div>
        <div><img src={cottage1}/></div>
        <div><img src={cottage1}/></div>
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
const englishParagraph = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

const czechTitle = "Nase chalupa";
const czechParagraph = "Nalezame se v nadherne krajine vesnicky Olesna. Kdybyste nahodou nekdy jeli kolem, tak se u nas stavte a prijdte se podivat na nasi chaloupku a kone. I nasi pejsci vas moc radi uvidi."
