import events from '../events.js';

// * manages interface between sidebar DOM & library arrays

const sidebar = (() => {
    // data

    // cache dom
    let viewPrefs = document.getElementById('view-prefs');
    let title = document.getElementById('title');

    // managers

    //helpers

    // bind events
    title.addEventListener('click', () => {
        viewPrefs.classList.toggle('hide');
    });

})();

export default sidebar;