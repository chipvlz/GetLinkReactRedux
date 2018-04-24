import React from 'react';
import { Divider } from 'semantic-ui-react';
import { Message, Icon, Form, Button, Input, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import successResult from './successResult';
import './ContentGetlink.css';

const GetLink = ({ lastGetStatus, onClickGetLink, onChangeUrl }) => {
  const searchButton = (
    <Button
      animated="vertical"
      color="youtube"
      size="huge"
      icon
      onClick={onClickGetLink}
    >
      <Icon name="search" />&nbsp;GET LINK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </Button>
  );
  const getResult = (lastGetStatus) => {
    const lastArrayStatus = lastGetStatus[lastGetStatus.length - 1];
    switch (lastArrayStatus.status) {
      case 'success':
        return successResult(lastArrayStatus.linkObject);
      case 'fail':
        return <div>fail</div>;
      case 'error':
        return <div>error</div>;
      default:
        return <div>Something wrong! Try again!</div>;
    }
  };
  return (
    <div className="content-body">
      <div className="notify">
        <Message positive>
          <p>
            <Icon name="hashtag" />&nbsp;&nbsp;Get link YOUTUBE, FACEBOOK,
            SOUNDCLOUD, TWITCH,...
          </p>
        </Message>
        <Message info>
          <Message.Header>
            <Icon name="book" />
            &nbsp;How to use?
          </Message.Header>
          <p>
            Paste your url below and that's it! For a list of available hosts.
            See
            <a href="#"> SUPPORTED HOSTS</a>.
          </p>
        </Message>
      </div>
      <div className="main-form">
        <Form>
          <Form.Field>
            <Input
              label="https://"
              placeholder="Paste your link here"
              action={searchButton}
              onChange={onChangeUrl}
              size="huge"
            />
          </Form.Field>
        </Form>
      </div>
      <div className="show-result">
        {lastGetStatus.length === 0 ? 'justinit' : getResult(lastGetStatus)}
      </div>
    </div>
  );
};
export default GetLink;
GetLink.propTypes = {
  onClickGetLink: PropTypes.func,
  onChangeUrl: PropTypes.func,
};
