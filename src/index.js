import './styles/reset.css';
import './styles/layout.css';
import './styles/typo.css';
import './styles/shaping.css';
import './styles/colors.css';

import defaultState from './scripts/default.js';
import display from './scripts/display';
import domDisplay from './scripts/domDisplay';
import forms from './scripts/forms';
import sidebar from './scripts/sidebar';
import domSidebar from './scripts/domSidebar';
import library from './scripts/library';
import events from './events';

// actions
defaultState.init();
events.viewEvents();