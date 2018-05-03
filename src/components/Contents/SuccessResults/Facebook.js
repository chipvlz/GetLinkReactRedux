import React from 'react';
import { Card, Image, Icon, Dropdown, Menu, Message } from 'semantic-ui-react';

const Facebook = ({ lastLinkObject, onClickDownload }) => {
  const normal = lastLinkObject.normal;
  const video = lastLinkObject.video;
  const audio = lastLinkObject.audio;
  return (
    <Card centered fluid>
      <a href={lastLinkObject.webpage_url} target="_blank">
        <Image style={{ margin: '0 auto' }} src={lastLinkObject.thumbnail} />
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
                text={val.format_id.toUpperCase() + ` (.${val.ext})`}
                onClick={() => onClickDownload(this, val.url)}
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
                text={
                  val.format.match(/\d*x\d*/)[0].toUpperCase() +
                  ` (.${val.ext})`
                }
                onClick={() => onClickDownload(this, val.url)}
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
                  `${val.format_note.toUpperCase()} ${val.asr}Hz (.${val.ext})`
                }
                onClick={() => onClickDownload(this, val.url)}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Card.Content>
    </Card>
  );
};
export default Facebook;
