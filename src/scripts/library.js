import events from '../events';

// * 'backend' manager class containing project/task states, factories, & methods

const library = (() => {
    // dynamic data
    let _projectLibrary = [];
    let _taskLibrary = [];
    let _taskCounter = 0;
    let _projectCounter = 0;

    //// cache DOM

    // factories
    class Project {
        // attributes
        constructor(projectID, projectTitle, projectDescription) {
            this.type = 'project';
            this.id = projectID;
            this.title = projectTitle;
            this.description = projectDescription;
        }

        // // getters
        // get attributeArray() {
        //     let attributeArray = [this.type, this.id, this.title, this.description];
        //     return attributeArray;
        // }

        // // setters
        // set title(value) {
        //     if (value !== this.title) {
        //         this.title = value;
        //     };
        // }
        // set description(value) {
        //     if (value !== this.description) {
        //         this.description = value;
        //     };
        // }
    }

    class Task {
        // attributes
        constructor(taskID, projectID, taskType, taskTitle, taskDescription, taskDue, taskPriority, taskTags, taskItems) {
            this.id = taskID;
            this.projectID = projectID;
            this.type = taskType;
            this.title = taskTitle;
            this.description = taskDescription;
            this.dueDate = taskDue;
            this.priority = taskPriority;
            this.tags = taskTags;
            this.items = [];
            if (this.type === 'checklist') {
                this.items = taskItems;
            };
        }

        // // getters
        // get attributeArray() {
        //     let attributeArray = [this._type, this._id, this.projectID, this.title, this.description, this.dueDate, this.priority, this.tags, this.items];
        //     return attributeArray;
        // }

        // // setters
        // set title(value) {
        //     if (value !== this.title) {
        //         this.title = value;
        //     };
        // }
        // set description(value) {
        //     if (value !== this.description) {
        //         this.description = value;
        //     };
        // }
        // set dueDate(value) {
        //     if (value !== this.dueDate) {
        //         this.dueDate = value;
        //     };
        // }
        // set priority(value) {
        //     if (value !== this.priority) {
        //         this.priority = value;
        //     };
        // }
        // set tags(valueArray) {
        //     if (valueArray !== this.tags) {
        //         this.tags = valueArray;
        //     };
        // }
    }

    // getters
    function _queryItem(cardID) {
        let libraryReference = cardID.slice(0, (cardID.length - 1));
        let itemReference = cardID.slice(-1);

        if (libraryReference === 'project') {
            for (let p in _projectLibrary) {
                if (_projectLibrary[p].id == itemReference) {
                    let item = _projectLibrary[p];
                    let itemValueArray = [item.title, item.description];
                    events.publish('closeModifyQuery', libraryReference, itemValueArray);
                    return;
                };
            };
        } else if (libraryReference === 'task') {
            for (let t in _taskLibrary) {
                let projectTitle;
                for (let p in _projectLibrary) {
                    if (_projectLibrary[p].id === _taskLibrary[t].projectID) {
                        projectTitle = _projectLibrary[p].title;
                    };
                };
                if (_taskLibrary[t].id == itemReference) {
                    let item = _taskLibrary[t];
                    let itemValueArray = [item.title, item.description, item.dueDate, item.priority, projectTitle, item.tags];
                    events.publish('closeModifyQuery', libraryReference, itemValueArray);
                    return;
                };
            };
        };
    }
    function _queryProjectNamesIDs() {
        let nameIDArray = [];
        for (let p in _projectLibrary) {
            nameIDArray.push([_projectLibrary[p].title, _projectLibrary[p].id]);
        };

        console.log(nameIDArray);

        events.publish ('closeProjectOptionsQuery', nameIDArray)
    }

    // methods
    function _createProject(attributeArray) {
        let _id = _projectCounter;
        let _newProject = new Project(_id, ...attributeArray);
        // console.log(_newProject);
        _projectLibrary.push(_newProject);
        events.publish('newProject', _newProject);
        _projectCounter++;
    }
    function _createTask(attributeArray) {
        let _id = _taskCounter;
        let _newTask = new Task(_id, ...attributeArray);
        // console.log(_newTask);
        _taskLibrary.push(_newTask);
        events.publish('newTask', _newTask);
        _taskCounter++;
    }
    function _deleteProject(cardID) {
        console.log('enter _deleteProject()');

        //// index into projArray, delete project
        // * send notification to update sidebar
        // * send notification to update display

        let libraryReference = cardID.slice(0, (cardID.length - 1));
        let itemReference = cardID.slice(-1);
        if (libraryReference === 'project') {
            let projectLoopStart = _projectLibrary.length -1;
            for (let p = projectLoopStart; p > -1; p--) {
                if (_projectLibrary[p].id == itemReference) {
                    _projectLibrary.splice(_projectLibrary[p], 1);
                };
            };
            let taskLoopStart = _taskLibrary.length - 1;
            for (let t = taskLoopStart; t > -1; t--) {
                if (_taskLibrary[t].projectID == itemReference) {
                    _taskLibrary.splice(_taskLibrary[t], 1);
                };
            };
        };
    }
    function _deleteTask() {
        // * index into libArray, delete task
    }

    // bind events
    events.subscribe('createProject', _createProject);  // published from display.js (initDefault())
    events.subscribe('createTask', _createTask);    // published from display.js (initDefault())
    events.subscribe('openModifyQuery', _queryItem);    // published from forms.js (_openModifyQuery())
    events.subscribe('openProjectOptionsQuery', _queryProjectNamesIDs)  // published from forms.js (_fillFormValues())
    events.subscribe('openDeleteQuery', _deleteProject);    // published from forms.js (_openDeleteQuery())

})();