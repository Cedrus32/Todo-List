import events from '../events';

// * 'backend' manager class containing project/task states, factories, & methods

const library = (() => {
    // dynamic data
    let _projLib = [];
    let _taskLib = [];
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
    function getItem(cardID) {  // ! delete later?
        let libRef = cardID.slice(0, (cardID.length - 1));
        let itemRef = cardID.slice(-1);
        console.log(libRef);
        console.log(itemRef);

        if (libRef == 'proj') {
            for (let p in _projLib) {
                if (_projLib[p].getID() == itemRef) {
                    return _projLib[p].getData();
                };
            };
        } else if (libRef == 'task') {
            for (let t in _taskLib) {
                console.log(_taskLib[t]);
                if (_taskLib[t].getID() == itemRef) {
                    return _taskLib[t].getData();
                };
            };
        };
    }
    function getProjOptionData() {  // ! delete later?
        let dataArray = [];
        for (let p in _projLib) {
            dataArray.push([_projLib[p].getID(), _projLib[p].getTitle()]);
        }
        console.log('******* DATA ARRAY *******')
        console.log(dataArray);
        console.log('******* DATA ARRAY *******')
        return dataArray;
    }
    function _getProjName(projRef) {  // ! delete later?
        for (let p in _projLib) {
            if (_projLib[p].getID() === projRef) {
                return _projLib[p].getTitle();
            };
        };
    }

    // methods
    function _createProject(attributeArray) {
        let _id = _projectCounter;
        let _newProject = new Project(_id, ...attributeArray);
        // console.log(_newProject);
        _projLib.push(_newProject);
        events.publish('newProject', _newProject);
        _projectCounter++;
    }
    function _createTask(attributeArray) {
        let _id = _taskCounter;
        let _newTask = new Task(_id, ...attributeArray);
        // console.log(_newTask);
        _taskLib.push(_newTask);
        events.publish('newTask', _newTask);
        _taskCounter++;
    }
    function _deleteProject() {
        // * index into projArray, delete project
        // * send notification to update sidebar
    }
    function _deleteTask() {
        // * index into libArray, delete task
    }

    // bind events
    events.subscribe('createProject', _createProject);
    events.subscribe('createTask', _createTask);

    // make public
    return {
        getItem,            // forms.js (_queryLibrary())
        getProjOptionData,  // index.js -> forms.js (genProjOptions())
    };

})();