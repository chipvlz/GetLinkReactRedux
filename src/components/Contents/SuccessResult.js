import React from 'react';
import { Card, Image, Icon, Dropdown, Menu, Message } from 'semantic-ui-react';
import Youtube from './SuccessResults/Youtube';
import Facebook from './SuccessResults/Facebook';
import Soundcloud from './SuccessResults/Soundcloud';
import Instagram from './SuccessResults/Instagram';

class successResult extends React.Component {
  componentDidMount = () => {
    this.resultClass = document.querySelector('.result');
    setTimeout(() => {
      this.resultClass.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);
  };
  onClickDownload = (e, url) => {
    const a = document.createElement('a');
    a.target = '_blank';
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  render() {
    const lastLinkObject = this.props.lastLinkObject;
    switch (lastLinkObject.type) {
      case 'youtube':
        return (
          <Youtube
            lastLinkObject={lastLinkObject}
            onClickDownload={this.onClickDownload}
          />
        );
      case 'facebook':
        return (
          <Facebook
            lastLinkObject={lastLinkObject}
            onClickDownload={this.onClickDownload}
          />
        );
      case 'soundcloud':
        return (
          <Soundcloud
            lastLinkObject={lastLinkObject}
            onClickDownload={this.onClickDownload}
          />
        );
      case 'instagram':
        return (
          <Instagram
            lastLinkObject={lastLinkObject}
            onClickDownload={this.onClickDownload}
          />
        );
      default:
        return (
          <Message negative className="info-message">
            <Message.Header>
              Something went wrong! Please try again!
            </Message.Header>
          </Message>
        );
    }
  }
}
export default successResult;
