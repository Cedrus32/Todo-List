import events from '../events.js';

// * manages interface between display DOM & library arrays

const display = (() => {
    // data
    let _sampleProjectValues = [['Unsorted', "This is your tasks' default location. Any tasks without a project live here."],
                               ];
    let _sampleTaskValues = [[0, 'singleton', 'Task 1', 'this is a sample task', '2001-01-01', 3, ['#tag']],
                             [0, 'singleton', 'Task 2', 'this is #2', '2002-02-02', 2, ['']],
                             [0, 'checklist', 'Task 3', 'this is a checklist', '2003-03-03', 1, ['#tig', '#tog'], ['item 1', 'item 2', 'item 3']],
                            ];

    // managers
    function initDefault() {
        _publishCreateProjectEvent(_sampleProjectValues[0]);
        for (let t = 0; t < (_sampleTaskValues.length); t++) {
            _publishCreateTaskEvent(_sampleTaskValues[t]);
        };
    }

    // helpers
    function _publishCreateProjectEvent(projectValues) {
        events.publish('createProject', projectValues); // subscribed by library.js
    }
    function _publishCreateTaskEvent(taskValues) {
        events.publish('createTask', taskValues);   // subscribed by library.js
    }
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

    return {
        initDefault,   // used by index.js
    }

})();

export default display;