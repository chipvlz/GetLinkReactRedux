import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import './Logo.css';

const Logo = () => {
  const onLogoClick = () => {
    window.location.href = '/';
  };
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
