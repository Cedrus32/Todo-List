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
                    let itemValueArray = [item.id, item.title, item.description];
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
                    let itemValueArray = [item.id, item.title, item.description, item.dueDate, item.priority, projectTitle, item.tags];
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
        events.publish('projectCreated', _newProject);  // subscribed by display.js
        _projectCounter++;
    }
    function _createTask(attributeArray) {
        let _id = _taskCounter;
        let _newTask = new Task(_id, ...attributeArray);
        // console.log(_newTask);
        _taskLibrary.push(_newTask);
        events.publish('taskCreated', _newTask);    // subscribed by display.js
        _taskCounter++;
    }
    function _modifyItem(values) {
        console.log(values);
        if (values[0] === 'project') {
            // let projectReference = //...
            // index _projectLibrary by projectReference
        } else if (values[0] === 'task') {
            // let taskReference = //...
            // index _taskLibrary by taskReference
        }
    }
    function _deleteProject(cardID) {
        let projectReference = cardID.slice(-1);
        let projectLoopStart = _projectLibrary.length - 1;
        for (let p = projectLoopStart; p > -1; p--) {
            if (_projectLibrary[p].id == projectReference) {
                _projectLibrary.splice(p, 1);
            };
        };
        let taskLoopStart = _taskLibrary.length - 1;
        for (let t = taskLoopStart; t > -1; t--) {
            if (_taskLibrary[t].projectID == projectReference) {
                _taskLibrary.splice(t, 1);
            };
        };
        //// console.log(_projectLibrary);
        //// console.log(_taskLibrary);
        // * send notification to update sidebar (remove deleted project, select new project view)
        // * ---> will in turn notify display to refresh
    }
    function _deleteTask(cardID) {
        let taskReference = cardID.slice(-1);
        let projectReference;
        for (let t in _taskLibrary) {
            if (_taskLibrary[t].id == taskReference) {
                projectReference = _taskLibrary[t].projectID;
                _taskLibrary.splice(t, 1);
            };
        };
        //// console.log(_taskLibrary);
        // * send notification to display to refresh
    }

    // bind events
    events.subscribe('createProject', _createProject);  // published from display.js (initDefault())
    events.subscribe('createTask', _createTask);    // published from display.js (initDefault())
    events.subscribe('openModifyQuery', _queryItem);    // published from forms.js (_openModifyQuery())
    events.subscribe('openProjectOptionsQuery', _queryProjectNamesIDs)  // published from forms.js (_fillFormValues())
    events.subscribe('deleteProject', _deleteProject);    // published from forms.js (_openDeleteQuery())
    events.subscribe('deleteTask', _deleteTask);    // published from domDisplay.js (_renderItemHeaders())
    events.subscribe('modifyConfirm', _modifyItem); //published from forms.js (_confirmModify())

})();