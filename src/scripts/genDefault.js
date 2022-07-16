import library from './library';
import dom from './dom';

const genDefault = (() => {
    // data
    let _projects = [['Unsorted', "This is your tasks' default location. Any task without a project live here."],
                    ];
    let _tasks = [[0, 'singleton', 'Task 1', 'this is a sample task', '01/01/01', 3, '#tag'],
                  [0, 'singleton', 'Task 2', 'this is #2', '02/02/02', 2, ''],
                  [0, 'checklist', 'Task 3', 'this is a checklist', '03/03/03', 1, '#tig #tog'],
                 ];

    // manager
    function init() {
        _createDefaultProjs();
        _createDefTasks();

        _genDefDisplay();
    }

    // helpers
    function _createDefaultProjs() {
        for (let p in _projects) {
            library.createProject(_projects[p])
        };
    }
    function _createDefTasks() {
        for (let t in _tasks) {
            library.createTask(_tasks[t]);
        };
    }
    function _genDefDisplay() {
        let projectLib = library.getProjLib();
        for (let p in projectLib) {
            dom.projContainer(projectLib[p]);
        };
        // let taskLib = library.getTaskLib();
        // for (let t in taskLib) {
        //     dom.taskCard(taskLib[t]);
        // };
    }

    return {
        init,   // used by index.js
    }

})();

export default genDefault;