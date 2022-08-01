import './styles/reset.css';
import './styles/layout.css';
import './styles/typo.css';
import './styles/shaping.css';
import './styles/colors.css';

import display from './scripts/display';
import domDisplay from './scripts/domDisplay';
import forms from './scripts/forms';
import sidebar from './scripts/sidebar';
// import domSidebar from '.scripts/domSidebar';
import library from './scripts/library';
import events from './events';

// manager function here

// ! move vvv into domDisplay
let viewPrefs = document.getElementById('view-prefs');
let title = document.getElementById('title');
title.addEventListener('click', () => {
    viewPrefs.classList.toggle('hide');
});

// actions
display.initDefault();
events.viewEvents();