import React from 'react';
import { Card, Image, Icon, Dropdown, Menu, Message } from 'semantic-ui-react';

const Soundcloud = ({ lastLinkObject, onClickDownload }) => {
  const audio = lastLinkObject.formats.filter((formatObject) =>
    formatObject.format_id.match(/^http/),
  );
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
                text={`${val.abr.toString()}Kbps (.${val.ext})`}
                onClick={() => onClickDownload(this, val.url)}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Card.Content>
    </Card>
  );
};
export default Soundcloud;
