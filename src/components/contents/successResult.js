import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const successResult = (lastLinkObject) => {
  switch (lastLinkObject.type) {
    case 'youtube':
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
    case 'facebook':
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
