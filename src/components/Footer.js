import React from 'react';
import './Footer.css';
import { Icon } from 'semantic-ui-react';

const Footer = () => (
  <div className="footer-with-love">
    Developed with <Icon id="heart-icon" name="heart" /> by{' '}
    <a href="https://www.facebook.com/vuhuucuong97" target="_blank" rel="noopener noreferrer">Vu Huu Cuong</a>
  </div>
);

export default Footer;
