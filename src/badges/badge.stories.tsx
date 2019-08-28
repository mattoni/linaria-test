import * as React from 'react';
import { Badge } from './badge';
import { storiesOf } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCircle } from '@fortawesome/pro-solid-svg-icons';
import styled from 'styled-components';

const SpaceBetween = styled.div`
  display: flex;
  & > * {
    margin-right: 1rem;
  }
`;

storiesOf('Badges', module).add('Basic', () => (
  <SpaceBetween>
    <Badge>Badge</Badge>
  </SpaceBetween>
));

storiesOf('Badges', module).add('Icon', () => (
  <SpaceBetween>
    <Badge>
      <FontAwesomeIcon
        style={{ marginRight: '0.5rem', height: '1rem' }}
        icon={faCoffee}
      />
      Delicious Coffee
    </Badge>
  </SpaceBetween>
));

storiesOf('Badges', module).add('Colors', () => (
  <SpaceBetween>
    <Badge color="main">
      <FontAwesomeIcon
        style={{ marginRight: '0.5rem', height: '1rem' }}
        icon={faCircle}
      />
      Container
    </Badge>
    <Badge color="text">
      <FontAwesomeIcon
        style={{ marginRight: '0.5rem', height: '1rem' }}
        icon={faCircle}
      />
      Container
    </Badge>
    <Badge color="success">
      <FontAwesomeIcon
        style={{ marginRight: '0.5rem', height: '1rem' }}
        icon={faCircle}
      />
      Container
    </Badge>
    <Badge color="error">
      <FontAwesomeIcon
        style={{ marginRight: '0.5rem', height: '1rem' }}
        icon={faCircle}
      />
      Container
    </Badge>
    <Badge color="warn">
      <FontAwesomeIcon
        style={{ marginRight: '0.5rem', height: '1rem' }}
        icon={faCircle}
      />
      Container
    </Badge>
  </SpaceBetween>
));

storiesOf('Badges', module).add('Font Size', () => (
  <SpaceBetween>
    <Badge fontSize="huge">
      <FontAwesomeIcon
        style={{ marginRight: '0.5rem', height: '1rem' }}
        icon={faCoffee}
      />
      Delicious Coffee
    </Badge>
  </SpaceBetween>
));

storiesOf('Badges', module).add('Modifying Theme', () => (
  <SpaceBetween>
    <Badge theme={{ font: { small: '1.5rem' } }}>
      <FontAwesomeIcon
        style={{ marginRight: '0.5rem', height: '1rem' }}
        icon={faCoffee}
      />
      Delicious Coffee
    </Badge>
  </SpaceBetween>
));
