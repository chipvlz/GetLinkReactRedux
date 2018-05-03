import React from 'react';
import { Grid, List, Image, Segment } from 'semantic-ui-react';
import './ContentSupportedHosts.css';
import youtube from '../../assets/images/youtube.png';
import facebook from '../../assets/images/facebook.png';
import soundcloud from '../../assets/images/soundcloud.png';
import instagram from '../../assets/images/instagram.png';

const ContentSupportedHosts = () => {
  return (
    <Segment>
      <Grid columns={3} divided>
        <Grid.Column>
          <Image inline src={youtube} />
          <span className="name-of-service">Youtube</span>
        </Grid.Column>
        <Grid.Column>
          <Image inline src={facebook} />
          <span className="name-of-service">Youtube</span>
        </Grid.Column>
        <Grid.Column>
          <Image inline src={soundcloud} />
          <span className="name-of-service">Soundcloud</span>
        </Grid.Column>
        <Grid.Column>
          <Image inline src={instagram} />
          <span className="name-of-service">Instagram</span>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};
export default ContentSupportedHosts;
