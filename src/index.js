import './styles/reset.css';
import './styles/layout.css';
import './styles/typo.css';
import './styles/shaping.css';
import './styles/colors.css';

import display from './scripts/display';

// manager function here

// ! move vvv into domDisplay
let viewPrefs = document.getElementById('view-prefs');
let title = document.getElementById('title');
title.addEventListener('click', () => {
    viewPrefs.classList.toggle('hide');
});

// actions
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
display.initDefault();
