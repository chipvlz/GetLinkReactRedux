import React, { Component } from 'react';
import { Segment, Message } from 'semantic-ui-react';
import GetLink from './Contents/ContentGetLink';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Content.css';
import SupportedHosts from './Contents/ContentSupportedHosts';
import AboutProject from './Contents/ContentAboutProject';
import HowTo from './Contents/ContentHowTo';

const Content = ({
  activePage,
  inputUrl,
  lastGetStatus,
  onClickGetLink,
  onChangeUrl,
  onChangePage,
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
            onChangePage={onChangePage}
          />
        );
      case 'sphosts':
        return <SupportedHosts />;
      case 'howto':
        return <HowTo />;
      case 'aboutprj':
        return <AboutProject />;
      default:
        return (
          <Message negative className="info-message">
            <Message.Header>
              Something went wrong! Please try again!
            </Message.Header>
          </Message>
        );
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
