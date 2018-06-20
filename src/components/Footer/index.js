import React from 'react';

import FacebookIcon from '../FacebookIcon';
import ShareLink from '../Share';
import MailIcon from '../MailIcon';
import FacebookShareIcon from '../FacebookShareIcon';
import GoogleMapsIcon from '../GoogleMapsIcon';

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      <p className="footer__address">Киев, Красноткацкая 27а</p>
      <div className="social">
        <ShareLink>
          <FacebookShareIcon/>
        </ShareLink>

        <a href="mailto:raskolnikov.kiev@gmail.com" target="_blank" className="social__item">
          <MailIcon />
          <div className="social__text">Отправить письмо</div>
        </a>

        <a href="https://goo.gl/maps/YYWA5rHjEcD2" target="_blank" className="social__item">
          <GoogleMapsIcon />
          <div className="social__text">Карта</div>
        </a>

        <a href="https://facebook.com/TheatreRaskolnikov" target="_blank" className="social__item">
          <FacebookIcon />
          <div className="social__text" >Facebook-страница</div>
        </a>

      </div>
    </div>
  </footer>
);

export default Footer;
