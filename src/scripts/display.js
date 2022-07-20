import library from './library';
import domDisplay from './domDisplay';

// * manages interface between display DOM & library arrays

// ! add conditional that receives a notification from viewPrefs OR forms to update display (handled in index.js?)
// ! create additional file viewPrefs.js

const display = (() => {
    // data
    let _project = [['Unsorted', "This is your tasks' default location. Any tasks without a project live here."],
                    ];
    let _tasks = [[0, 'singleton', 'Task 1', 'this is a sample task', '2001-01-01', 3, '#tag'],
                  [0, 'singleton', 'Task 2', 'this is #2', '2002-02-02', 2, ''],
                  [0, 'checklist', 'Task 3', 'this is a checklist', '2003-03-03', 1, '#tig #tog', ['item 1', 'item 2', 'item 3']],
                 ];

    // manager
    function initDefault() {
        _createProj(_project);
        _createTasks(_tasks);
        _genDisplay();
        domDisplay.assignEvents();
    }

    // helpers
    function _createProj(project) {
        for (let p in project) {
            library.createProject(project[p])
        };
    }
    function _createTasks(tasks) {
        for (let t in tasks) {
            library.createTask(tasks[t]);
        };
    }
    function _genDisplay() {
        let projectLib = library.getProjLib();
        domDisplay.genProj(projectLib[0]);

        let taskLib = library.getTaskLib();
        domDisplay.genTasks(taskLib);
    }

    return {
        initDefault,   // used by index.js
    }

})();

export default display;