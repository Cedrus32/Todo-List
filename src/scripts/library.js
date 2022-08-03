import events from '../events';

// * 'backend' manager module containing project/task states, factories, & methods

const library = (() => {
    // dynamic data
    let _projectLibrary = [];
    let _taskLibrary = [];
    let _taskCounter = 0;
    let _projectCounter = 0;

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
            let itemCount = 0;

            this.id = taskID;
            this.projectID = projectID;
            this.type = taskType;
            this.title = taskTitle;
            this.description = taskDescription;
            this.dueDate = taskDue;
            this.priority = taskPriority;
            this.tags = taskTags;
            if (this.type === 'checklist') {
                this.items = [];
                if (taskItems !== undefined) {
                    for (let i = 0; i < (taskItems.length); i++) {
                        let itemBundle = [itemCount, taskItems[i]];
                        this.items.push(itemBundle);
                        itemCount++;
                    };
                };
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
        set setTags(value) {
            if (value !== this.tags) {
                this.tags = value;
            };
        }
        set setCheckboxItem(valueArray) {
            let index = valueArray[0];
            let content = valueArray[1];
            if (content !== this.items[index]) {
                this.items[index][1] = content;
            };
        }
    }

    // getters
    function _queryItemInstance(itemReferences) {
        let libraryReference = itemReferences[0];
        let instanceReference = itemReferences[1];
        //// console.log(libraryReference);
        //// console.log(itemReference);

        if (libraryReference === 'project') {
            for (let p = 0; p < (_projectLibrary.length); p++) {
                if (_projectLibrary[p].id == instanceReference) {
                    let item = _projectLibrary[p];
                    let itemValueArray = [item.id, item.title, item.description];
                    //// console.log(itemValueArray)
                    events.publish('closeModifyQuery', itemValueArray);   // subscribed by forms.js
                    return;
                };
            };
        } else if (libraryReference === 'task') {
            for (let t = 0; t < (_taskLibrary.length); t++) {
                if (_taskLibrary[t].id == instanceReference) {
                    let item = _taskLibrary[t];
                    let itemValueArray = [item.id, item.type, item.title, item.description, item.dueDate, item.priority, item.projectID, item.tags];
                    //// console.log(itemValueArray);
                    events.publish('closeModifyQuery', itemValueArray);   // subscribed by forms.js
                };
            };
        } else if (libraryReference === 'checkbox') {
            let taskReference = instanceReference[0];       // * unbundled from domDisplay.js (_openModifyFormQuery())
            let checkboxReference = instanceReference[1];   // * unbundled from domDisplay.js (_openModifyFormQuery())
            for (let t = 0; t < (_taskLibrary.length); t++) {
                if (_taskLibrary[t].id == taskReference) {
                    let checklistItems = _taskLibrary[t].items;
                    for (let i = 0; i < (checklistItems.length); i++) {
                        if (checklistItems[i][0] == checkboxReference) {
                            let itemValueArray = ['checkbox', taskReference, checklistItems[i][0], checklistItems[i][1]];
                            console.log(itemValueArray);
                            events.publish('closeModifyQuery', itemValueArray);   // subscribed by forms.js
                        };
                    };
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
    function _bundleInstances(viewType, queryReference) {
        let instanceBundle = [];

        let queryProjects = false;
        let queryTasks = false;
        let queryTags = false;
        
        switch (viewType) {
            case 'all':
                queryTasks = true;
                break;
            case 'project':
                queryProjects = true;
                break;
            case 'tag':
                queryTags = true;
        };

        console.log(`queryProjects: ${queryProjects}`);
        console.log(`queryTasks: ${queryTasks}`);
        console.log(`queryTags: ${queryTags}`);

        instanceBundle.push(viewType);
        if (queryProjects === true) {
            for (let p = 0; p < (_projectLibrary.length); p++) {
                if (_projectLibrary[p].id == queryReference) {
                    instanceBundle.push(_projectLibrary[p]);
                };
            };
            for (let t = 0; t < (_taskLibrary.length); t++) {
                if (_taskLibrary[t].projectID == queryReference) {
                    instanceBundle.push(_taskLibrary[t]);
                };
            };
        } else if (queryTasks === true) {
            if (viewType === 'all') {
                for (let t = 0; t < (_taskLibrary.length); t++) {
                    instanceBundle.push(_taskLibrary[t]);
                };
            };
        } else if (queryTags === true) {
            instanceBundle.push(queryReference);
            for (let t = 0; t < (_taskLibrary.length); t++) {
                let tagsArray = _taskLibrary[t].tags;
                for (let i = 0; i < (tagsArray.length); i++) {
                    if (tagsArray[i] === queryReference) {
                        instanceBundle.push(_taskLibrary[t]);
                        break; // ? watch to see if this breaks out of whole loop
                    };
                };
            };
        };

        console.log(instanceBundle);
        events.publish('updateDisplayView', instanceBundle);    // subscribed by domDisplay.js
    }

    // setter manager
    function _setItemValues(formValues) {
        let libraryReference = formValues[0];
        let instanceReference = formValues[1];
        formValues.splice(0, 2);    // [title, description]
                                    // [type, title, description, dueDate, 'priority', 'projectID', [tags]]
        console.log(libraryReference);
        console.log(instanceReference);
        console.log(formValues);
        
        if (libraryReference === 'project') {
            if (instanceReference === '') {
                _createProject(formValues);
            } else {
                _modifyProject(instanceReference, formValues);
            };

        } else if (libraryReference === 'task') {
            if(instanceReference === '') {
                //                         projectID                type           title          description    dueDate        priority                 tags
                let formValuesReordered = [parseInt(formValues[5]), formValues[0], formValues[1], formValues[2], formValues[3], parseInt(formValues[4]), formValues[6]]
                _createTask(formValuesReordered);
            } else {
                _modifyTask(instanceReference, formValues);
            };
        } else if (libraryReference === 'checkbox') {
            let checklistItemReference = formValues[0];
            let checklistItemContent = formValues[1];
            for (let t = 0; t < (_taskLibrary.length); t++) {
                if (_taskLibrary[t].id == instanceReference) {
                    let instanceItemArray = _taskLibrary[t].items;
                    if (!instanceItemArray.some(item => item[0] == checklistItemReference)) {
                        _createChecklistItem(instanceReference, formValues);
                    } else {
                        _modifyCheckbox(instanceReference, checklistItemReference, checklistItemContent); // formValues[0] needed to pass single value from formValues[]
                    };
                };
            };
        };
    }

    // setter helper methods
    function _createProject(attributeArray) {
        let _id = _projectCounter;
        let _newProject = new Project(_id, ...attributeArray);
        console.log('new project:')
        console.log(_newProject);
        _projectLibrary.push(_newProject);
        _projectCounter++;

        events.publish('projectCreated', _newProject);  // subscribed by display.js, sidebar.js
    }
    function _createTask(attributeArray) {
        let _id = _taskCounter;
        let _newTask = new Task(_id, ...attributeArray);
        console.log('new task:')
        console.log(_newTask);
        _taskLibrary.push(_newTask);
        _taskCounter++;

        events.publish('taskCreated', _newTask);    // subscribed by display.js, sidebar.js
    }
    function _createChecklistItem(taskID, itemValue) {
        for (let t = 0; t < (_taskLibrary.length); t++) {
            if (_taskLibrary[t].id == taskID) {
                let taskInstance = _taskLibrary[t];
                let itemListLength = taskInstance.items.length;
                let newItemID;
                if (taskInstance.items.length === 0) {
                    newItemID = 0;
                } else {
                    let lastItemID = taskInstance.items[itemListLength - 1][0];
                    newItemID = lastItemID + 1;
                }

                itemValue[0] = newItemID;
                _taskLibrary[t].items.push(itemValue);
                let _newCheckbox = ['checkbox', taskInstance.id, taskInstance.items[itemListLength][0], taskInstance.items[itemListLength][1]];
                console.log('new checkbox:')
                console.log(_taskLibrary[t].items);

                events.publish('checklistItemCreated', _newCheckbox);    // subscribed by display.js
            };
        };
    }
    function _modifyProject(targetItemID, attributeArray) {
        //// console.log(attributeArray)
        let projectInstance;
        for (let p = 0; p < (_projectLibrary.length); p++) {
            if (_projectLibrary[p].id == targetItemID) {
                projectInstance = _projectLibrary[p];
            };
        };
        console.log('original project instance:')
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
        console.log('modified project instance:')
        console.log(projectInstance);

        events.publish('itemModified', projectInstance);  // subscribed by domDisplay.js
    }
    function _modifyTask(targetItemID, attributeArray) {
        //// console.log(attributeArray);
        let taskInstance;
        for (let t = 0; t < (_taskLibrary.length); t++) {
            if (_taskLibrary[t].id == targetItemID) {
                taskInstance = _taskLibrary[t];
            };
        };
        console.log('original task instance:')
        console.log(taskInstance);
        for (let a = 1; a < (attributeArray.length); a++) {
            // [type, title, description, dueDate, 'priority', 'projectID', 'tags']
            switch(a) {
                case 1:
                    taskInstance.setTitle = attributeArray[1];
                    break;
                case 2:
                    taskInstance.description = attributeArray[2];
                    break;
                case 3:
                    taskInstance.setDueDate = attributeArray[3];
                    break;
                case 4:
                    taskInstance.setPriority = parseInt(attributeArray[4]);
                    break;
                case 5:
                    taskInstance.setProjectID = parseInt(attributeArray[5]);
                    break;
                case 6:
                    taskInstance.setTags = attributeArray[6];
            };
        };
        console.log('modified task instance:')
        console.log(taskInstance);

        events.publish('itemModified', taskInstance);  // subscribed by domDisplay.js, domSidebar.js
    }
    function _modifyCheckbox(targetTaskID, targetItemID, targetContent) {
        //// console.log(targetItemID, targetContent);
        let taskInstance;
        let checkboxInstance;
        for (let t = 0; t < (_taskLibrary.length); t++) {
            if (_taskLibrary[t].id == targetTaskID) {
                taskInstance = _taskLibrary[t];
                let targetChecklistItems = _taskLibrary[t].items;
                for (let i = 0; i < (targetChecklistItems.length); i++) {
                    if (targetChecklistItems[i][0] == targetItemID) {
                        let targetValueArray = [targetItemID, targetContent];
                        taskInstance.setCheckboxItem = targetValueArray;
                        checkboxInstance = ['checkbox', targetTaskID, targetItemID, targetContent];
                    };
                };
            };
        };
        console.log('original task (checkbox) instance:')
        console.log(taskInstance);
        console.log('modified task (checkbox) instance:')
        console.log(taskInstance.items);

        events.publish('itemModified', checkboxInstance);   // subscribed by domDisplay.js
    }

    // delete methods
    function _deleteProject(cardID) {
        let cardReferences = cardID.split('_');
        let projectReference = cardReferences[1];
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
        console.log('project delete results:')
        console.log(_projectLibrary);
        console.log(_taskLibrary);

        // * send notification to update sidebar (remove deleted project, select new project view)
        // * ---> will in turn notify display to refresh
        events.publish('removeProjectFromDisplay', cardID);    // subscribed by domDisplay.js
    }
    function _deleteTask(cardID) {
        let cardReferences = cardID.split('_');
        let taskReference = cardReferences[1];
        for (let t = 0; t < (_taskLibrary.length); t++) {
            if (_taskLibrary[t].id == taskReference) {
                // projectReference = _taskLibrary[t].projectID;    // ? delete ?
                _taskLibrary.splice(t, 1);
            };
        };
        console.log('task delete results:')
        console.log(_taskLibrary);
        events.publish('removeTaskFromDisplay', cardID);    // subscribed by domDisplay.js
    }
    function _deleteChecklistItem(checkID) {
        let taskReference = checkID.split('__')[0].split('_')[1];
        let checkReference = checkID.split('__')[1].split('_')[1];
        for (let t = 0; t < (_taskLibrary.length); t++) {
            if (_taskLibrary[t].id == taskReference) {
                let checklistItemsArray = _taskLibrary[t].items;
                for (let i = 0; i < (checklistItemsArray.length); i++) {
                    if (checklistItemsArray[i][0] == checkReference) {
                        checklistItemsArray.splice(i, 1);
                        console.log('checklist item delete results:')
                        console.log(checklistItemsArray);
                    };
                };
            };
        };

        events.publish('removeChecklistItemFromDisplay', checkID);  // subscribed by domDisplay.js
    }

    // bind events
    events.subscribe('createProject', _createProject);  // published from display.js (initDefault())
    events.subscribe('createTask', _createTask);    // published from display.js (initDefault())
    events.subscribe('openModifyFormQuery', _queryItemInstance);    // published from forms.js (_openModifyQuery())
    events.subscribe('openProjectOptionsQuery', _queryProjectNamesIDs)  // published from forms.js (_showForm())
    events.subscribe('deleteProject', _deleteProject);    // published from forms.js (confirmDeleteButton eventListener)
    events.subscribe('deleteTask', _deleteTask);    // published from domDisplay.js (_renderItemHeaders())
    events.subscribe('confirmInput', _setItemValues); //published from forms.js (_confirmInput())
    events.subscribe('clickDeleteChecklistItem', _deleteChecklistItem)  // published from domDisplay.js (_renderChecklistItemControls())
    events.subscribe('openViewPreferenceQuery', _bundleInstances) // published from domDisplay.js (_openViewQuery)

})();