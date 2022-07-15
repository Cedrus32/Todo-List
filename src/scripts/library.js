const library = (() => {
    // data
    let _libArray = [];
    let _taskCounter = 1;

    //// cache DOM

    // bind events

    // task factory
    const task = function (id, projectName, type, title, description, dueDate, priority, tags) {
        let _id = id;
        let _project = projectName;
        let _type = type;
        let _title = title;
        let _description = description;
        let _dueDate = dueDate;
        let _priority = priority;
        let _tags = tags;

        // methods
        const modTitle = (title) => {
            _title = title;
        }
        const modDesc = (description) => {
            _desc = description;
        }
        const modDate = (dueDate) => {
            _dueDate = dueDate;
        }
        const modPriority = (priority) => {
            _priority = priority;
        }
        const modTags = (tags) => {
            _tags = tags;
        }

        // helpers
        const viewInfo = () => {
            console.log(_id);
            console.log(_project);
            console.log(_type);
            console.log(_title);
            console.log(_description);
            console.log(_dueDate);
            console.log(_priority);
            console.log(_tags);
        }

        return {
            modTitle,
            modDesc,
            modDate,
            modPriority,
            modTags,
            viewInfo,
        }
    }

    // managers

    // methods
    function createTask(attributeArray) {
        let id = _taskCounter;
        let newTask = task(id, ...attributeArray);
        _libArray.push(newTask);
        _taskCounter++;
    }
    function deleteTask() {
        // index into libArray, delete task
    }

    // helpers
    function viewLibArray() {
        console.log(_libArray);
        for (let t in _libArray) {
            _libArray[t].viewInfo();
        };
    }

    // actions

    // make public
    return {
        createTask,
        deleteTask,
        viewLibArray,
    };

})();

export default library;