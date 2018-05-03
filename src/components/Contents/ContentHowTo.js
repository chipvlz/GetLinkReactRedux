import React from 'react';
import { Header, List, Segment, Image } from 'semantic-ui-react';
import facebook from '../../assets/images/howto/facebook.png';
import instagram1 from '../../assets/images/howto/instagram1.png';
import instagram2 from '../../assets/images/howto/instagram2.png';
import logofb from '../../assets/images/facebook.png';
import logoinsta from '../../assets/images/instagram.png';
import './ContentHowTo.css';

const ContentHowTo = () => (
  <div className="guide">
    <Segment className="seg">
      <Header as="h2">
        <Image size="mini" src={logofb} />Facebook
      </Header>
      <List as="ul">
        <List.Item as="li">
          <strong className="note">Right click</strong> on the{' '}
          <strong className="note">video's time</strong> and select{' '}
          <strong className="note">Copy link address</strong>.
          <Image bordered src={facebook} />
        </List.Item>
        <List.Item as="li">Paste copied link.</List.Item>
      </List>
    </Segment>
    <Segment className="seg">
      <Header as="h2">
        <Image size="mini" src={logoinsta} />Instagram
      </Header>
      <List as="ul">
        <List.Item as="li">
          Go to the profile page which contains the photo/video you want to get.
          <Image bordered src={instagram1} />
        </List.Item>
        <List.Item as="li">
          <strong className="note">Right click</strong> on the photo/video and
          select <strong className="note"> Copy link address</strong>.
          <Image bordered src={instagram2} />
        </List.Item>
        <List.Item as="li">Paste copied link.</List.Item>
      </List>
    </Segment>
  </div>
);
export default ContentHowTo;
