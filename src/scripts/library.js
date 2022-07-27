import events from '../events';

// * 'backend' manager module containing project/task states, factories, & methods

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

        // setters
        set setTitle(value) {
            if (value !== this.title) {
                this.title = value;
            };
        }
        set setDescription(value) {
            if (value !== this.description) {
                this.description = value;
            };
        }
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
            if (this.type === 'checklist') {    // ? is this necessary if taskItems are pushed individually ?
                this.items = taskItems;         // ? as they are created ?
            };
        }

        // setters
        set setTitle(value) {
            if (value !== this.title) {
                this.title = value;
            };
        }
        set setDescription(value) {
            if (value !== this.description) {
                this.description = value;
            };
        }
        set setDueDate(value) {
            if (value !== this.dueDate) {
                this.dueDate = value;
            };
        }
        set setPriority(value) {
            if (value !== this.priority) {
                this.priority = value;
            };
        }
        set setProjectID(value) {
            if (value !== this.projectID) {
                this.projectID = value;
            };
        }
        set setTags(valueArray) {
            if (valueArray !== this.tags) {
                this.tags = valueArray;
            };
        }
    }

    // getters
    function _queryItem(cardID) {   // TODO reduce repetition
        let libraryReference = cardID.slice(0, (cardID.length - 1));
        let itemReference = cardID.slice(-1);

        if (libraryReference === 'project') {
            for (let p = 0; p < (_projectLibrary.length); p++) {
                if (_projectLibrary[p].id == itemReference) {
                    let item = _projectLibrary[p];
                    let itemValueArray = [item.id, item.title, item.description];
                    events.publish('closeModifyQuery', itemValueArray);   // subscribed by forms.js
                    return;
                };
            };
        } else if (libraryReference === 'task') {
            console.log('querying task');
            for (let t = 0; t < (_taskLibrary.length); t++) {
                if (_taskLibrary[t].id == itemReference) {
                    let item = _taskLibrary[t];
                    let itemValueArray = [item.id, item.type, item.title, item.description, item.dueDate, item.priority, item.projectID, item.tags];
                    console.log(itemValueArray);
                    events.publish('closeModifyQuery', itemValueArray);   // subscribed by forms.js
                };
            };
        };
    }
    function _queryProjectNamesIDs() {
        let nameIDArray = [];
        for (let p = 0; p < (_projectLibrary.length); p++) {
            nameIDArray.push([_projectLibrary[p].title, _projectLibrary[p].id]);
        };

        events.publish('closeProjectOptionsQuery', nameIDArray) // subscribed by forms.js
    }

    // methods
    function _setItemValues(formValues) {
        let libraryReference = formValues[0];
        let itemReference = formValues[1];
        formValues.splice(0, 2);    // [title, description]
                                    // [type, title, description, dueDate, 'priority', 'projectID', [tags]]
        console.log(libraryReference);
        console.log(itemReference);
        console.log(formValues);
        
        if (libraryReference === 'project') {
            // check if project instance exists
            if (!_projectLibrary[itemReference]) {
                console.log('project does not exist -- create new project');
                _createProject(formValues);
            } else {
                _modifyProject(itemReference, formValues);
            };

        } else if (libraryReference === 'task') {
            // check if task instance exists
            if (!_taskLibrary[itemReference]) {
                console.log('task does not exist -- create new task');
                //                         projectID                type           title          description    dueDate        priority                 tags
                let formValuesReordered = [parseInt(formValues[5]), formValues[0], formValues[1], formValues[2], formValues[3], parseInt(formValues[4]), formValues[6]]
                _createTask(formValuesReordered);
            } else {
                _modifyTask(itemReference, formValues);
            };
        };
    }
    function _createProject(attributeArray) {
        let _id = _projectCounter;
        let _newProject = new Project(_id, ...attributeArray);
        console.log(_newProject);
        _projectLibrary.push(_newProject);
        events.publish('projectCreated', _newProject);  // subscribed by display.js
        _projectCounter++;
    }
    function _createTask(attributeArray) {
        let _id = _taskCounter;
        let _newTask = new Task(_id, ...attributeArray);
        console.log(_newTask);
        _taskLibrary.push(_newTask);
        events.publish('taskCreated', _newTask);    // subscribed by display.js
        _taskCounter++;
    }
    function _modifyProject(targetItemID, attributeArray) {
        let projectInstance = _projectLibrary[targetItemID];
        console.log(projectInstance);
        for (let a = 0; a < (attributeArray.length); a++) {
            switch(a) {
                case 0:
                    projectInstance.setTitle = attributeArray[0];
                    break;
                case 1:
                    projectInstance.setDescription = attributeArray[1];
            };
        };
        console.log(projectInstance);
    }
    function _modifyTask(targetItemID, attributeArray) {
        console.log(attributeArray);
        let taskInstance = _taskLibrary[targetItemID];
        console.log(taskInstance);
        for (let a = 0; a < (attributeArray.length); a++) {
            switch(a) {
                case 0:
                    taskInstance.setTitle = attributeArray[1];
                    break;
                case 1:
                    taskInstance.description = attributeArray[2];
                    break;
                case 2:
                    taskInstance.setDueDate = attributeArray[3];
                    break;
                case 3:
                    taskInstance.setPriority = parseInt(attributeArray[4]);
                    break;
                case 4:
                    taskInstance.setProjectID = parseInt(attributeArray[5]);
                    break;
                case 5:
                    taskInstance.setTags = attributeArray[6];
            };
        };
        console.log(taskInstance);
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
        for (let t = 0; t < (_taskLibrary.length); t++) {
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
    events.subscribe('openProjectOptionsQuery', _queryProjectNamesIDs)  // published from forms.js (_showForm())
    events.subscribe('deleteProject', _deleteProject);    // published from forms.js (_openDeleteQuery())
    events.subscribe('deleteTask', _deleteTask);    // published from domDisplay.js (_renderItemHeaders())
    events.subscribe('confirmInput', _setItemValues); //published from forms.js (_confirmInput())

})();