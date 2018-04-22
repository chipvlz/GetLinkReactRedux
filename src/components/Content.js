import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import GetLink from './contents/ContentGetLink';
import PropTypes from 'prop-types';
import axios from 'axios';

const Content = ({ activePage, inputUrl, onClickGetLink, onChangeUrl }) => {
  const getContent = (activePage) => {
    switch (activePage) {
      case 'getlink':
        return (
          <GetLink onClickGetLink={onClickGetLink} onChangeUrl={onChangeUrl} />
        );
      case 'sphosts':
        return '';
      case 'tasks':
        return '';
      case 'aboutme':
        return '';
      case 'aboutprj':
        return '';
      default:
        return 'What?';
    }
  };
  return <Segment attached="bottom">{getContent(activePage)}</Segment>;
};
export default Content;
Content.propTypes = {
  onClickGetLink: PropTypes.func,
  onChangeUrl: PropTypes.func,
  activePage: PropTypes.string,
  inputUrl: PropTypes.string,
};
