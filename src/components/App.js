import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import LogoContainer from '../containers/LogoContainer';
import MenuContainer from '../containers/MenuContainer';
import ContentContainer from '../containers/ContentContainer';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Container>
        <LogoContainer />
        <MenuContainer />
        <ContentContainer />
      </Container>
      <Footer />
    </div>
  );
};
export default App;
