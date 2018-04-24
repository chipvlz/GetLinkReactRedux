import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './Logo.css';

const Logo = ({ onLogoClick }) => {
  return (
    <Menu id="logo" secondary size="large" borderless>
      <Menu.Item name="home" onClick={onLogoClick}>
        <Icon name="terminal" />
        [GET LINK] Project
      </Menu.Item>
    </Menu>
  );
};
export default Logo;
Logo.proptypes = {
  onLogoClick: PropTypes.func,
};
