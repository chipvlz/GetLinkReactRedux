import React from 'react';
import { Loader, Message, Icon, Form, Button, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SuccessResult from './SuccessResult';
import './ContentGetlink.css';
import Typed from 'typed.js';

class GetLink extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    const optionsTyped = {
      // Get link YOUTUBE, FACEBOOK, SOUNDCLOUD, TWITCH,...
      strings: [
        'Get link <span class="list-hosts">YOUTUBE</span>',
        'Get link <span class="list-hosts">FACEBOOK</span>',
        'Get link <span class="list-hosts">SOUNDCLOUD</span>',
        'And <span class="list-hosts">MORE...</span>',
      ],
      typeSpeed: 50,
      loop: true,
      smartBackspace: true,
    };
    const typed = new Typed('.get-link-list', optionsTyped);
  };
  searchButton = () => (
    <Button
      animated="vertical"
      color="youtube"
      size="huge"
      icon
      disabled={
        this.props.lastGetStatus[this.props.lastGetStatus.length - 1].status ===
        'fetching'
      }
      onClick={this.props.onClickGetLink}
    >
      <Icon name="search" />&nbsp;GET LINK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </Button>
  );
  getResult = (lastGetStatus) => {
    const lastArrayStatus = lastGetStatus[lastGetStatus.length - 1];
    switch (lastArrayStatus.status) {
      case 'success':
        return (
          <div className="result">
            <SuccessResult lastLinkObject={lastArrayStatus.linkObject} />
          </div>
        );
      case 'fail':
        return (
          <Message warning className="info-message">
            <Message.Header>
              Failed to get link! Please try again!
            </Message.Header>
          </Message>
        );
      case 'not sp':
        return (
          <Message warning className="info-message">
            <Message.Header>
              Host is not supported yet! Please try again later!
            </Message.Header>
          </Message>
        );
      case 'blank':
        return (
          <Message warning className="info-message">
            <Message.Header>Hmm... Did you enter the url yet?</Message.Header>
          </Message>
        );
      case 'error':
        return (
          <Message negative className="info-message">
            <Message.Header>Error! Please try again!</Message.Header>
          </Message>
        );
      case 'fetching':
        return <Loader active inline="centered" />;
      case 'init':
        return <div />;
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
  render() {
    return (
      <div className="content-body">
        <div className="notify">
          <div className="div-get-link-list">
            <span className="get-link-list" />
          </div>
          <Message color="blue" icon>
            <Icon name="info" />
            <Message.Content>
              <Message.Header>Notice</Message.Header>
              <p>
                Get link only support <Icon color="black" name="world" />
                <span style={{ color: 'red' }}>PUBLIC</span> videos/photos.
              </p>
            </Message.Content>
          </Message>
        </div>
        <div className="main-form">
          <Form>
            <Form.Field>
              <Input
                onFocus={(e) => e.target.select()}
                label="https://"
                placeholder="Paste your link here"
                action={this.searchButton()}
                onChange={this.props.onChangeUrl}
                size="huge"
                // onPaste was triggered before onChange
                onPaste={(e) => {
                  e.persist();
                  setTimeout(() => {
                    this.props.onClickGetLink();
                    e.target.blur();
                  }, 10);
                }}
              />
            </Form.Field>
          </Form>
        </div>
        <div className="show-result">
          {this.getResult(this.props.lastGetStatus)}
        </div>
      </div>
    );
  }
}

export default GetLink;
GetLink.propTypes = {
  onClickGetLink: PropTypes.func,
  onChangeUrl: PropTypes.func,
};
