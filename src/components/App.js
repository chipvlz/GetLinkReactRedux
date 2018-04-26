import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import LogoContainer from '../containers/LogoContainer';
import MenuContainer from '../containers/MenuContainer';
import ContentContainer from '../containers/ContentContainer';
import './App.css';

const App = () => {
  return (
    <div>
      <Container>
        <LogoContainer />
        <MenuContainer />
        <ContentContainer />
      </Container>
    </div>
  );
};
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeItem: 'getlink',
//     };
//     this.handleChangeActive = this.handleChangeActive.bind(this);
//   }

//   handleChangeActive(e, { name }) {
//     this.setState({ activeItem: name });
//   }
//   render() {
//     const activeItem = this.state.activeItem;
//     return (
//       <Container>
//         <Logo />
//         <Menu activeItem={activeItem} onClick={this.handleChangeActive} />
//         <Content activeItem={activeItem} />
//       </Container>
//     );
//   }
// }

export default App;
