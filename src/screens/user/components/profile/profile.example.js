import React from 'react'
import {storiesOf} from '@storybook/react'
import {getMockUser, getMockOrgs} from '../../shared/github-api.stub'
import Profile from './profile'

storiesOf('Profile', module).add('example profile', () =>
  <Profile user={getMockUser()} orgs={getMockOrgs()} />,
)
