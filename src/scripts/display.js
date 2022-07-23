import events from '../events.js';
import domDisplay from './domDisplay';

// * manages interface between display DOM & library arrays

const display = (() => {
    // data
    let _sampleProjectValues = [['Unsorted', "This is your tasks' default location. Any tasks without a project live here."],
                               ];
    let _sampleTaskValues = [[0, 'singleton', 'Task 1', 'this is a sample task', '2001-01-01', 3, '#tag'],
                             [0, 'singleton', 'Task 2', 'this is #2', '2002-02-02', 2, ''],
                             [0, 'checklist', 'Task 3', 'this is a checklist', '2003-03-03', 1, '#tig #tog', ['item 1', 'item 2', 'item 3']],
                            ];
    let _currentProject = 0;

    // managers
    function initDefault() {
        _createProject(_sampleProjectValues[0]);
        for (let t in _sampleTaskValues) {
            _createTask(_sampleTaskValues[t]);
        }

        // domDisplay.assignEvents(); // ! not working
    }

    // helpers
    function _createProject(projectValues) {
        events.publish('createProject', projectValues);
    }
    function _createTask(taskValues) {
        events.publish('createTask', taskValues);
    }
    function _renderDisplay(object) {
        if (object.type === 'project') {
            console.log('confirmed: type project');
            events.publish('renderProject', object);
        };
        if (object.type === 'singleton' || object.type === 'checklist') {
            console.log('confirmed: type singleton || checklist')
            events.publish('renderTask', object);
        }
    }
    function _modifyDisplay() {
        // index into DOM for specific itemID, set new content
    }

    // bind events
    events.subscribe('newProject', _renderDisplay);
    events.subscribe('newTask', _renderDisplay);

    return {
        initDefault,   // used by index.js
    }

})();

export default display;