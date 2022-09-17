import events from '../events.js'

// & initiates startup state

const startup = (() => {
    // data
    let _sampleProjectValues = [['project', '', 'Unsorted', "This is your tasks' default location. Any tasks without a project live here.", '00'],
                               ];
    let _sampleTaskValues = [['task', '', 'singleton', 'Task 1', 'this is a sample task', '2001-01-01', 3, 0],
                             ['task', '', 'singleton', 'Task 2', 'this is #2', '2002-02-02', 2, 0],
                             ['task', '', 'checklist', 'Task 3', 'this is a checklist', '2003-03-03', 1, 0, ['item 1', 'item 2', 'item 3']],
                            ];

    // methods
    function startup(loadLocalData, loadDefaultData) {
        if (loadLocalData === true) {
            let storageKey;
            let item;
            for (let i = 0; i < (localStorage.length); i++) {
                storageKey = localStorage.key(i);
                item = JSON.parse(localStorage.getItem(storageKey));
                if (item.type === 'project') {
                    events.publish('projectCreated', item);
                };
            };
            for (let i = 0; i < (localStorage.length); i++) {
                storageKey = localStorage.key(i);
                item = JSON.parse(localStorage.getItem(storageKey));
                if ((item.type !== 'project') && (item.projectID === 0)) {
                    events.publish('taskCreated', item);
                };
            }
        } else if (loadDefaultData === true) {
            _createDefaultProject(_sampleProjectValues[0]);
            for (let t = 0; t < (_sampleTaskValues.length); t++) {
                _createDefaultTask(_sampleTaskValues[t]);
            };
        };

        // if localStorage NOT available, page loads blank

        events.publish('setStartupState', '');
        events.publish('initializeDefaultLayout', window.innerWidth);   // subscribed by sidebar.js, display.js
    }
    function _createDefaultProject(projectValues) {
        events.publish('confirmInput', projectValues); // subscribed by library.js
    }
    function _createDefaultTask(taskValues) {
        events.publish('confirmInput', taskValues); // subscribed by library.js
    }


    // event subscriptions

    events.subscribe('storageCheckComplete', startup); // subscribed by local.js (check())

})();

export default startup;