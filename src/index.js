import './styles/reset.css';
import './styles/layout.css';
import './styles/typo.css';
import './styles/shaping.css';
import './styles/colors.css';

import library from './scripts/library'

// manager function here

let viewPrefs = document.getElementById('view-prefs');
let title = document.getElementById('title');
title.addEventListener('click', () => {
    viewPrefs.classList.toggle('hide');
});

// qc
let task1 = library.createTask('project', 'type', 'title', 'desc', 'date', 'priority', 'tag')
console.log(task1);
console.log('');
library.viewLibArray();
console.log('');
