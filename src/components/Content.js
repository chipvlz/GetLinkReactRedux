import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import GetLink from './contents/ContentGetLink';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Content.css';

const Content = ({
  activePage,
  inputUrl,
  lastGetStatus,
  onClickGetLink,
  onChangeUrl,
  onClickDownload,
}) => {
  const getContent = (activePage) => {
    switch (activePage) {
      case 'getlink':
        return (
          <GetLink
            inputUrl={inputUrl}
            lastGetStatus={lastGetStatus}
            onClickGetLink={onClickGetLink}
            onChangeUrl={onChangeUrl}
            onClickDownload={onClickDownload}
          />
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
  return (
    <Segment id="main-content" attached="bottom">
      {getContent(activePage)}
    </Segment>
  );
};
export default Content;
Content.propTypes = {
  onClickGetLink: PropTypes.func,
  onChangeUrl: PropTypes.func,
  activePage: PropTypes.string,
  inputUrl: PropTypes.string,
};
