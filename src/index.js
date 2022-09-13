import './styles/reset.css';
import './styles/spacing.css';
import './styles/typo.css';
import './styles/effects.css';
import './styles/colors.css';

import defaultState from './scripts/default.js';
import display from './scripts/display';
import forms from './scripts/forms';
import sidebar from './scripts/sidebar';
import library from './scripts/library';
import events from './events';
import local from './local';

// actions

if (local.storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    events.publish('initializeDefaultLayout', window.innerWidth);   // subscribed by sidebar.js, display.js
  }
  else {
    // Too bad, no localStorage for us
    console.log('lS error')
  }

defaultState.init();
events.viewEvents();