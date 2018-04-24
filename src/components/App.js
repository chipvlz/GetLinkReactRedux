import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import ShowLogo from '../containers/ShowLogo';
import ActiveMenu from '../containers/ActiveMenu';
import ActiveContent from '../containers/ActiveContent';
import './App.css';

const App = () => {
  return (
    <div>
      <Container>
        <ShowLogo />
        <ActiveMenu />
        <ActiveContent />
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
