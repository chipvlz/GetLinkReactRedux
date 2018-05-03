import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import './Menu.css';
import PropTypes from 'prop-types';

const MenuApp = ({ activeItem, onClick }) => {
  return (
    <Menu id="menu-app" tabular icon="labeled" attached="top">
      <Menu.Item
        name="getlink"
        active={activeItem === 'getlink'}
        onClick={onClick}
      >
        <Icon name="download" />
        GET LINK
      </Menu.Item>
      <Menu.Item
        name="howto"
        active={activeItem === 'howto'}
        onClick={onClick}
      >
        <Icon name="map" />
        HOW TO USE
      </Menu.Item>
      <Menu.Item
        name="sphosts"
        active={activeItem === 'sphosts'}
        onClick={onClick}
      >
        <Icon name="tasks" />
        SUPPORTED HOSTS
      </Menu.Item>
      <Menu.Item
        name="aboutprj"
        active={activeItem === 'aboutprj'}
        onClick={onClick}
      >
        <Icon name="code" />
        ABOUT THIS PROJECT
      </Menu.Item>
    </Menu>
  );
};
export default MenuApp;
MenuApp.propTypes = {
  activeItem: PropTypes.string,
  onClick: PropTypes.func,
};
