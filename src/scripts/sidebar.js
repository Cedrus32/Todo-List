import events from '../events.js';

// * manages interface between sidebar DOM & library arrays

const sidebar = (() => {
    // data

    // cache dom
    let viewPrefs = document.getElementById('view-prefs');
    let title = document.getElementById('title');

    // managers
    function _publishRenderSidebarEvents(object) {
        if (object.type === 'project') {
            console.log('render project link');
            events.publish('renderProjectLink', object.id, object.title);   // subscribed by domSidebar.js
        } else if (object.type === 'singleton' || object.type === 'checklist') {
            console.log('render tag links');
        };
    }

    //helpers

    // bind events
    title.addEventListener('click', () => {
        viewPrefs.classList.toggle('hide');
    });
    events.subscribe('projectCreated', _publishRenderSidebarEvents);
    events.subscribe('taskCreated', _publishRenderSidebarEvents);

})();

export default sidebar;