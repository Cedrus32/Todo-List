import './styles/reset.css';
import './styles/layout.css';
import './styles/typo.css';
import './styles/shaping.css';
import './styles/colors.css';

import display from './scripts/display';
import forms from './scripts/forms';    // ! also unused, but can be safely removed
import genDyn from './scripts/genDynamic';  // ! unused, but if removed, dom does not render

// manager function here

// ! move vvv into domDisplay
let viewPrefs = document.getElementById('view-prefs');
let title = document.getElementById('title');
title.addEventListener('click', () => {
    viewPrefs.classList.toggle('hide');
});

// actions
display.initDefault();
