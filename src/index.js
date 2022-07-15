import './styles/reset.css';
import './styles/layout.css';
import './styles/typo.css';
import './styles/shaping.css';
import './styles/colors.css';

import library from './scripts/library'
import samples from './scripts/samples';

// manager function here

let viewPrefs = document.getElementById('view-prefs');
let title = document.getElementById('title');
title.addEventListener('click', () => {
    viewPrefs.classList.toggle('hide');
});

// actions
samples.addSamples();
library.viewLibArray();
