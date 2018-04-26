import React from 'react';
import {
  Divider,
  Loader,
  Message,
  Icon,
  Form,
  Button,
  Input,
  Card,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SuccessResult from './SuccessResult';
import './ContentGetlink.css';

const GetLink = ({
  lastGetStatus,
  onClickGetLink,
  onChangeUrl,
  onClickDownload,
}) => {
  const searchButton = (
    <Button
      animated="vertical"
      color="youtube"
      size="huge"
      icon
      disabled={lastGetStatus[lastGetStatus.length - 1].status === 'fetching'}
      onClick={onClickGetLink}
    >
      <Icon name="search" />&nbsp;GET LINK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </Button>
  );
  const getResult = (lastGetStatus) => {
    const lastArrayStatus = lastGetStatus[lastGetStatus.length - 1];
    switch (lastArrayStatus.status) {
      case 'success':
        return (
          <SuccessResult
            onClickDownload={onClickDownload}
            lastLinkObject={lastArrayStatus.linkObject}
          />
        );
      case 'fail':
        return (
          <Message warning>
            <Message.Header className="info-get-link">
              Failed to get link! Please try again!
            </Message.Header>
          </Message>
        );
      case 'not sp':
        return <div>not sp</div>;
      case 'blank':
        return <div>blank</div>;
      case 'error':
        return <div>error</div>;
      case 'fetching':
        return <div>fetching</div>;
      case 'init':
        return <div>init</div>;
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
              //shit, onPaste was triggered before onChange
              onPaste={() => setTimeout(onClickGetLink, 10)}
            />
          </Form.Field>
        </Form>
      </div>
      <div className="show-result">
        <Loader
          active={lastGetStatus[lastGetStatus.length - 1].status === 'fetching'}
          inline="centered"
        />
        {getResult(lastGetStatus)}
      </div>
    </div>
  );
};
export default GetLink;
GetLink.propTypes = {
  onClickGetLink: PropTypes.func,
  onChangeUrl: PropTypes.func,
};
