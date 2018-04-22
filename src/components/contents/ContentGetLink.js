import React from 'react';
import { Divider } from 'semantic-ui-react';
import { Message, Icon, Form, Button, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './ContentGetlink.css';

const GetLink = ({ onClickGetLink, onChangeUrl }) => {
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
  return (
    <div>
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
    </div>
  );
};
export default GetLink;
GetLink.propTypes = {
  onClickGetLink: PropTypes.func,
  onChangeUrl: PropTypes.func,
};
