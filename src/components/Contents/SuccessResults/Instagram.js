import React from 'react';
import { Card, Image, Icon, Dropdown, Menu, Message } from 'semantic-ui-react';

const Instagram = ({ lastLinkObject, onClickDownload }) => {
  const image = lastLinkObject.display_resources; //array
  return (
    <Card centered fluid>
      <a
        href={`https://www.instagram.com/${lastLinkObject.owner.username}`}
        target="_blank"
      >
        <Image style={{ margin: '0 auto' }} src={image[0].src} />
      </a>
      <Card.Content>
        <Card.Header>
          <a
            href={`https://www.instagram.com/${lastLinkObject.owner.username}`}
            target="_blank"
          >
            {lastLinkObject.owner.full_name} - {lastLinkObject.owner.username}
          </a>
        </Card.Header>
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
          text="Images"
          icon="image"
          labeled
          button
          className="icon"
        >
          <Dropdown.Menu>
            <Dropdown.Header icon="filter" content="Select quality:" />
            <Dropdown.Divider />
            {image.map((val, index) => (
              <Dropdown.Item
                key={index}
                text={`${val.config_width} x ${val.config_height}.jpg`}
                onClick={() => onClickDownload(this, val.src)}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown>
        {lastLinkObject.is_video ? (
          <Dropdown
            scrolling
            upward
            compact
            text="Video"
            icon="video camera"
            labeled
            button
            className="icon"
          >
            <Dropdown.Menu>
              <Dropdown.Header icon="filter" content="Select quality:" />
              <Dropdown.Divider />
              <Dropdown.Item
                text={`${lastLinkObject.owner.username}.mp4`}
                onClick={() => onClickDownload(this, lastLinkObject.video_url)}
              />
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          ''
        )}
      </Card.Content>
    </Card>
  );
};
export default Instagram;
