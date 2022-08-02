import events from '../events.js';

// * manages interface between sidebar DOM & library arrays

const sidebar = (() => {
    // data

    // cache dom
    let viewPrefs = document.getElementById('view-prefs');
    let title = document.getElementById('title');

    // managers
    function _publishRenderSidebarEvents(object) {
        if (object.type === 'project' && object.id !== 0) {
            console.log('render project link');
            events.publish('renderProjectLink', object.id, object.title);   // subscribed by domSidebar.js
        } else if (object.type === 'singleton' || object.type === 'checklist') {
            console.log('render tag links');
        };
    }

    //helpers

    // bind events
    // ? hide sidebar when not focused ?
    title.addEventListener('click', () => {
        viewPrefs.classList.toggle('hide');
    });
    events.subscribe('projectCreated', _publishRenderSidebarEvents);    // published by library.js
    events.subscribe('taskCreated', _publishRenderSidebarEvents);   // published by library.js

})();

export default sidebar;