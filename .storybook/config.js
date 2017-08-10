import 'bootstrap/dist/css/bootstrap.css'
import {configure} from '@storybook/react'

function loadStories() {
  require('../src/screens/user/index.example')
  require('../src/screens/user/components/repo-list/repo-list.example')
  require('../src/screens/user/components/profile/profile.example')
}

configure(loadStories, module)
