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
        name="sphosts"
        active={activeItem === 'sphosts'}
        onClick={onClick}
      >
        <Icon name="tasks" />
        SUPPORTED HOSTS
      </Menu.Item>
      <Menu.Item
        name="aboutme"
        active={activeItem === 'aboutme'}
        onClick={onClick}
      >
        <Icon name="address book outline" />
        ABOUT ME
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

// export default class MenuApp extends Component {
//   render() {
//     const activeItem = this.props.activeItem;

//     return (
//       <Menu id="menu-app" tabular icon="labeled" attached="top">
//         <Menu.Item
//           name="getlink"
//           active={activeItem === 'getlink'}
//           onClick={this.props.onClick}
//         >
//           <Icon name="download" />
//           GET LINK
//         </Menu.Item>
//         <Menu.Item
//           name="sphosts"
//           active={activeItem === 'sphosts'}
//           onClick={this.props.onClick}
//         >
//           <Icon name="tasks" />
//           SUPPORTED HOSTS
//         </Menu.Item>
//         <Menu.Item
//           name="aboutme"
//           active={activeItem === 'aboutme'}
//           onClick={this.props.onClick}
//         >
//           <Icon name="address book outline" />
//           ABOUT ME
//         </Menu.Item>
//         <Menu.Item
//           name="aboutprj"
//           active={activeItem === 'aboutprj'}
//           onClick={this.props.onClick}
//         >
//           <Icon name="code" />
//           ABOUT THIS PROJECT
//         </Menu.Item>
//       </Menu>
//     );
//   }
// }
