import events from '../events.js';

// * manages interface between display DOM & library arrays

const display = (() => {
    // data

    // methods
    function _publishRenderDisplayEvents(object) {
        if (object.type === 'project') {
            events.publish('renderProject', object);    // subscribed by domDisplay.js
        };
        if (object.type === 'singleton' || object.type === 'checklist') {
            events.publish('renderTask', object);   // subscribed by domDisplay.js
        };
        if (object[0] === 'checkbox') {
            events.publish('renderChecklistItem', object);   // subscribed by domDisplay.js
        }
    }

    // bind events
    events.subscribe('projectCreated', _publishRenderDisplayEvents); // published from library.js (_createProject())
    events.subscribe('taskCreated', _publishRenderDisplayEvents);    // published from library.js (_createTask())
    events.subscribe('checklistItemCreated', _publishRenderDisplayEvents);   // published from library.js (_createChecklistItem())

})();

export default display;