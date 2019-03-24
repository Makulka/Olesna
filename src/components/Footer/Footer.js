import React from 'react';
import './Footer.scss';

const Footer = (props) => {
  return(
    <footer className="footer">
      {props.english? (
        <span>Our address: Olešná 12, Olešná 267 64, county Beroun, Czech Republic</span>
      ) : (
        <span>Naše adresa: Olešná 12, Olešná 267 64, okres Beroun, Česká Republika</span>
      )}
    </footer>
  );
}

export default Footer;


