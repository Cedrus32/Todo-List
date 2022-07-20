// * 'backend' manager class containing project/task states, factories, & methods

const library = (() => {
    // dynamic data
    let taskLib = [];
    let projLib = [];
    let _taskCounter = 1;
    let _projectCounter = 1;

    //// cache DOM

    // bind events

    // factories
    const _project = function(projID, projTitle, projDesc) {
        // data
        const objType = 'proj';
        let id = projID;
        let title = projTitle;
        let desc = projDesc;

        // setters
        function setTitle(value) {
            if (value !== title) {
                title = value;
            };
        }
        function setDesc(value) {
            if (value !== desc) {
                desc = value;
            };
        }

        // getters
        function getData() {
            let dataArray = [objType, id, title, desc];
            return dataArray;
        }
        function getID() {
            return id;
        }
        function getTitle() {
            return title;
        }
        function getDesc() {
            return desc;
        }

        // methods

        return {
            setTitle,   // ...
            setDesc,    // ...
            getData,    // dom.js (projHeader() -- qc)
            getID,      // ...
            getTitle,   // ...
            getDesc,    // dom.js (projJeader())
        }
    }
    const _task = function(taskID, projectID, taskType, taskTitle, taskDesc, taskDue, taskPriority, taskTags, taskItems) {
        // data
        const objType = 'task';
        let id = taskID;
        let projID = projectID;
        let type = taskType;
        let title = taskTitle;
        let desc = taskDesc;
        let dueDate = taskDue;
        let priority = taskPriority;
        let tags = taskTags;
        let items = [];
        if (type === 'checklist') {
            items = taskItems;
        }

        // setters
        function setTitle(value) {
            if (value !== title) {
                title = value;
            };
        }
        function setDesc(value) {
            if (value !== desc) {
                desc = value;
            };
        }
        function setDue(value) {
            if (value !== dueDate) {
                dueDate = value;
            };
        }
        function setPriority(value) {
            if (value !== priority) {
                priority = value;
            };
        }
        function setTags(value) {
            if (value !== tags) {
                tags = value;
            };
        }

        // getters
        function getData() {
            let infoArray = [objType, id, type, title, desc, dueDate, priority, projID, tags, items];
            return infoArray;
        }
        function getID() {
            return id;
        }
        function getType() {
            return type;
        }
        function getTitle() {
            return title;
        }
        function getDesc() {
            return desc;
        }
        function getDue() {
            return dueDate;
        }
        function getPriority() {
            return priority;
        }
        function getTags() {
            return tags;
        }
        function getItems() {
            return items;
        }

        return {
            setTitle,       // ...
            setDesc,        // ...
            setDue,         // ...
            setPriority,    // ...
            setTags,        // ...
            getData,        // dom.js (taskCard() -- qc)
            getID,          // ...
            getType,        // ...
            getTitle,       // ...
            getDesc,        // dom.js (taskCard())
            getDue,         // ...
            getPriority,    // ...
            getTags,        // ...
            getItems,       // ...
        }
    }

    // getters
    function getProjLib() {
        return projLib;
    }
    function getTaskLib() {
        return taskLib;
    }
    function getItem(cardID) {
        let libRef = cardID.slice(0, (cardID.length - 1));
        let itemRef = cardID.slice(-1);
        console.log(libRef);
        console.log(itemRef);

        if (libRef == 'proj') {
            for (let p in projLib) {
                if (projLib[p].getID() == itemRef) {
                    return projLib[p].getData();
                };
            };
        } else if (libRef == 'task') {
            for (let t in taskLib) {
                console.log(taskLib[t]);
                if (taskLib[t].getID() == itemRef) {
                    return taskLib[t].getData();
                };
            };
        };
    }
    function getProjOptionData() {
        let dataArray = [];
        for (let p in projLib) {
            dataArray.push([projLib[p].getID(), projLib[p].getTitle()]);
        }
        console.log('******* DATA ARRAY *******')
        console.log(dataArray);
        console.log('******* DATA ARRAY *******')
        return dataArray;
    }
    function _getProjName(projRef) {
        for (let p in projLib) {
            if (projLib[p].getID() === projRef) {
                return projLib[p].getTitle();
            };
        };
    }

    // methods
    function createProject(attributeArray) {
        let _id = _projectCounter;
        let _newProject = _project(_id, ...attributeArray);
        projLib.push(_newProject);
        _projectCounter++;
    }
    function createTask(attributeArray) {
        let id = _taskCounter;
        let newTask = _task(id, ...attributeArray);
        //// console.log('createTask() check');
        //// newTask.viewInfo();
        //// console.log('');
        taskLib.push(newTask);
        _taskCounter++;
    }
    function deleteProject() {
        // * index into projArray, delete project
        // * send notification to update sidebar
    }
    function deleteTask() {
        // * index into libArray, delete task
    }

    // make public
    return {
        getProjLib,         // genDefault.js (_genDefDisplay())
        getTaskLib,         // genDefault.js (_genDefDisplay())
        getItem,            // forms.js (_queryLibrary())
        getProjOptionData,  // index.js -> forms.js (genProjOptions())
        createProject,      // genDefault.js (_createDefaultProjs())
        createTask,         // genDefault.js (_createDefaultTasks())
        deleteProject,      // ...
        deleteTask,         // ...
    };

})();

export default library;