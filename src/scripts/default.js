import events from '../events.js'

// * initiates default state

const defaultState = (() => {
    // data
    let _sampleProjectValues = [['Unsorted', "This is your tasks' default location. Any tasks without a project live here."],
                                ];
    let _sampleTaskValues = [[0, 'singleton', 'Task 1', 'this is a sample task', '2001-01-01', 3, ['tag']],
                                [0, 'singleton', 'Task 2', 'this is #2', '2002-02-02', 2, []],
                                [0, 'checklist', 'Task 3', 'this is a checklist', '2003-03-03', 1, ['tig', 'tog'], ['item 1', 'item 2', 'item 3']],
                            ];

    // methods
    function init() {
        _createDefaultProject(_sampleProjectValues[0]);
        for (let t = 0; t < (_sampleTaskValues.length); t++) {
            _createDefaultTask(_sampleTaskValues[t]);
        };
    }
    function _createDefaultProject(projectValues) {
        events.publish('createProject', projectValues); // subscribed by library.js
    }
    function _createDefaultTask(taskValues) {
        events.publish('createTask', taskValues);
    }

    return {
        init,   // used by index.js
    }

})();

export default defaultState;