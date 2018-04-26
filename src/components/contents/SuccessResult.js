import React from 'react';
import { Card, Image, Icon, Dropdown, Menu, Message } from 'semantic-ui-react';

const successResult = ({ lastLinkObject, onClickDownload }) => {
  switch (lastLinkObject.type) {
    case 'youtube':
      const normal = lastLinkObject.normal.filter((val) => val.ext === 'mp4');
      const video = lastLinkObject.video_only.filter(
        (val) => val.ext === 'mp4',
      );
      const audio = lastLinkObject.audio_only.filter(
        (val) => val.ext === 'm4a',
      );
      return (
        <Card centered fluid>
          <a href={lastLinkObject.webpage_url} target="_blank">
            <Image
              style={{ margin: '0 auto' }}
              src={lastLinkObject.thumbnail}
            />
          </a>
          <Card.Content>
            <Card.Header>
              <a href={lastLinkObject.webpage_url} target="_blank">
                {lastLinkObject.title}
              </a>
            </Card.Header>
            <Card.Meta>
              <span className="date">{lastLinkObject.uploader}</span>
            </Card.Meta>
            <Card.Description>
              <Message style={{ textAlign: 'center' }} info>
                <Message.Header>
                  SELECT DOWNLOAD TYPE &nbsp;
                  <Icon name="download" />
                </Message.Header>
              </Message>
            </Card.Description>
          </Card.Content>

          <Card.Content style={{ margin: '0 auto' }} extra>
            <Dropdown
              scrolling
              upward
              compact
              text="Video with sound"
              icon="video camera"
              labeled
              button
              className="icon"
            >
              <Dropdown.Menu>
                <Dropdown.Header icon="filter" content="Select quality:" />
                <Dropdown.Divider />
                {normal.map((val, index) => (
                  <Dropdown.Item
                    key={index}
                    text={val.format.toUpperCase() + ` (.${val.ext})`}
                    onClick={() =>
                      onClickDownload(this, {
                        links: val,
                      })
                    }
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              scrolling
              upward
              compact
              text="Video (no sound)"
              icon="camera"
              labeled
              button
              className="icon"
            >
              <Dropdown.Menu>
                <Dropdown.Header icon="filter" content="Select quality:" />
                <Dropdown.Divider />
                {video.map((val, index) => (
                  <Dropdown.Item
                    key={index}
                    text={val.format.toUpperCase() + ` (.${val.ext})`}
                    onClick={() =>
                      onClickDownload(this, {
                        links: val,
                      })
                    }
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              scrolling
              upward
              compact
              text="Sound (no video)"
              icon="music"
              labeled
              button
              className="icon"
            >
              <Dropdown.Menu>
                <Dropdown.Header icon="filter" content="Select quality:" />
                <Dropdown.Divider />
                {audio.map((val, index) => (
                  <Dropdown.Item
                    key={index}
                    text={
                      val.format.toUpperCase() +
                      ` (.${val.ext}) (Download and change extenstion to .m4a)`
                    }
                    onClick={() =>
                      onClickDownload(this, {
                        links: val,
                      })
                    }
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Card.Content>
        </Card>
      );
    case 'facebook':
      console.log(lastLinkObject);
      return (
        <Card>
          <Image src={lastLinkObject.thumbnail} />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      );
    default:
      return <div>Something wrong, please try again!</div>;
  }
};
export default successResult;
