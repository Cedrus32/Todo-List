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

// actions
defaultState.init();
events.viewEvents();