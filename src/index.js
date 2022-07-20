import './styles/reset.css';
import './styles/layout.css';
import './styles/typo.css';
import './styles/shaping.css';
import './styles/colors.css';

import display from './scripts/display';
import forms from './scripts/forms';
import genDyn from './scripts/genDynamic';

// manager function here

// ! move vvv into domDisplay
let viewPrefs = document.getElementById('view-prefs');
let title = document.getElementById('title');
title.addEventListener('click', () => {
    viewPrefs.classList.toggle('hide');
});

// actions
display.initDefault();
genDyn.genProjOptions();
// genDyn.genViewPrefs();
