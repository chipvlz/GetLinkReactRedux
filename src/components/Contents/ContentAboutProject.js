import React from 'react';
import { Header, Icon, Image, Label, Divider } from 'semantic-ui-react';
import react from '../../assets/images/react.png';
import redux from '../../assets/images/redux.png';
import semanticui from '../../assets/images/semantic-ui.png';
import django from '../../assets/images/django.png';
import djangorest from '../../assets/images/djangorest.png';
import computeengine from '../../assets/images/compute-engine.png';
import storage from '../../assets/images/storage.png';
import './ContentAboutProject.css';

const frontEndList = [
  {
    name: 'React',
    img: react,
  },
  {
    name: 'Redux',
    img: redux,
  },
  {
    name: 'Semantic UI',
    img: semanticui,
  },
  {
    name: 'Google Cloud Storage',
    img: storage,
  },
];
const frontEnd = frontEndList.map((val, index) => (
  <Label size="huge" key={index}>
    <Image size="huge" key={index} centered src={val.img} />
    <span className="name-tech">{val.name}</span>
  </Label>
));

const backEndList = [
  {
    name: 'Django',
    img: django,
  },
  {
    name: 'Django Rest Framework',
    img: djangorest,
  },
  {
    name: 'Google Cloud Compute Engine',
    img: computeengine,
  },
];
const backEnd = backEndList.map((val, index) => (
  <Label size="huge" key={index}>
    <Image size="huge" key={index} centered src={val.img} />
    <span className="name-tech">{val.name}</span>
  </Label>
));
const ContentAboutProject = () => {
  return (
    <div>
      <Header textAlign="center" id="tech-using" as="h1">
        Technologies using
      </Header>
      <Divider />
      <Header textAlign="center" id="front-end" as="h2" icon>
        <Icon className="icon-tech" name="html5" color="red" />
        {'    '}Front End
        <Header.Subheader>{frontEnd}</Header.Subheader>
      </Header>
      <Divider />
      <Header textAlign="center" id="back-end" as="h2" icon>
        <Icon className="icon-tech" name="server" color="blue" />
        {'    '}Back End
        <Header.Subheader>{backEnd}</Header.Subheader>
      </Header>
    </div>
  );
};

export default ContentAboutProject;
