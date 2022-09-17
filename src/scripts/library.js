import events from '../events';

// & 'backend' manager module containing project/task states, classes, & methods

const library = (() => {
    // dynamic data
    let _projectLibrary = [];
    let _taskLibrary = [];
    let _taskCounter = 0;
    let _projectCounter = 0;

    // actions
    // ? research json structure -- set project/task libraries or just push objects directly?
    //// ! when creating... set key:value pair (key === project/task_id && value === project/task object)
    //// ! when modifying... index by key ^^^, rewrite value
    //// ! when displaying... get key:value pair, create array via ?? split string by "," ??, send to DOM with established logic

    // localStorage.clear();

    // factories
    class Project {
        // attributes
        constructor(projectID, projectTitle, projectDescription, projectIcon) {
            this.type = 'project';
            this.id = projectID;
            this.title = projectTitle;
            this.description = projectDescription;
            this.icon = projectIcon;
        }
    }

    class Task {
        // attributes
        constructor(taskID, projectID, taskType, taskTitle, taskDescription, taskDue, taskPriority, taskItems) {
            let itemCount = 0;

            this.id = taskID;
            this.projectID = projectID;
            this.type = taskType;
            this.title = taskTitle;
            this.description = taskDescription;
            this.dueDate = taskDue;
            this.priority = taskPriority;
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
            if (value != this.dueDate) {
                this.dueDate = value;
            };
        }
        set setPriority(value) {
            if (value != this.priority) {
                this.priority = value;
            };
        }
        set setProjectID(value) {
            if (value != this.projectID) {
                this.projectID = value;
            };
        }
        set setCheckboxItem(valueArray) {
            let index = valueArray[0];
            let content = valueArray[1];
            if (content !== this.items[index][1]) {
                this.items[index][1] = content;
            };
        }
    }

    // setter
    function _setInstanceValues(values) {
        let libraryReference = values[0];
        let instanceReference = values[1];  // ! NO VALUE
        values.splice(0, 2);    // [title, description]
                                // [type, title, description, dueDate, 'priority', 'projectID', [tags]]
        console.log(instanceReference);
        console.log(values);


        switch (libraryReference) {
            case 'project':
                switch (instanceReference) {
                    case '':
                        _createProject(values);
                        break;
                    default:
                        _modifyProject(instanceReference, values);
                };
                break;
            case 'task':
                switch (instanceReference) {
                    case '':
                        //                         projectID            type       title    description  dueDate    priority             items
                        let formValuesReordered = [parseInt(values[5]), values[0], values[1], values[2], values[3], parseInt(values[4]), values[6]]
                        _createTask(formValuesReordered);
                        break;
                    default:
                        _modifyTask(instanceReference, values);
                };
                break;
            case 'checkbox':
                let checklistItemReference = values[0];
                let checklistItemContent = values[1];
                let taskInstance = JSON.parse(localStorage.getItem(`task_${instanceReference}`));
                switch (checklistItemReference) {
                    case undefined:
                        _createCheckbox(taskInstance, values);
                        break;
                    default:
                        _modifyCheckbox(taskInstance, checklistItemReference, checklistItemContent); // formValues[0] needed to pass single value from formValues[]
                };
        };
    }

    // getters
    function _queryItemInstance(itemReferences) {
        let libraryReference = itemReferences[0];
        let instanceReference = itemReferences[1];
        //// console.log(libraryReference);
        //// console.log(instanceReference);

        let item;
        let itemValueArray;
        switch (libraryReference) {
            case 'project':
                item = JSON.parse(localStorage.getItem(`${libraryReference}_${instanceReference}`));
                itemValueArray = ['project', item.id, item.title, item.description, item.icon];
                break;
            case 'task':
                item = JSON.parse(localStorage.getItem(`${libraryReference}_${instanceReference}`));
                itemValueArray = ['task', item.id, item.type, item.title, item.description, item.dueDate, item.priority, item.projectID];
                break;
            case 'checkbox':
                let taskReference = instanceReference[0];       // * unbundled from domDisplay.js (_openModifyFormQuery())
                let checkboxReference = instanceReference[1];   // * unbundled from domDisplay.js (_openModifyFormQuery())
                let taskInstance = JSON.parse(localStorage.getItem(`task_${taskReference}`));
                let checklistItems = taskInstance.items;
                for (let i = 0; i < (checklistItems.length); i++) {
                    if (checklistItems[i][0] == checkboxReference) {
                        itemValueArray = ['checkbox', taskReference, checklistItems[i][0], checklistItems[i][1]];
                    };
                };
        };

        //// console.log(itemValueArray);
        events.publish('closeModifyInstanceQuery', itemValueArray);   // subscribed by forms.js
    }
    function _queryProjectNamesIDs() {
        let nameIDArray = [];
        for (let i = 0; i < localStorage.length; i++) {
            let storageKey = localStorage.key(i);
            let item = JSON.parse(localStorage.getItem(storageKey));
            if (item.type === 'project') {
                let projectTitle = JSON.parse(localStorage.getItem(storageKey)).title;
                let projectID = JSON.parse(localStorage.getItem(storageKey)).id;
                nameIDArray.push([projectTitle, projectID]);
            };
        };

        console.log(nameIDArray);
        events.publish('closeProjectOptionsQuery', nameIDArray) // subscribed by forms.js
    }
    function _bundleInstances(viewPreference, queryReference) { // ! reduce repetition vvv
        let instanceBundle = [];

        let queryProjects = false;
        let queryTasks = false;
        
        switch (viewPreference) {
            case 'All':
                queryTasks = true;
                break;
            case 'Today':
                queryTasks = true;
                break;
            case 'Upcoming':
                queryTasks = true;
                break;
            case 'Anytime':
                queryTasks = true;
                break;
            case 'project':
                queryProjects = true;
        };

        //// console.log(`queryProjects: ${queryProjects}`);
        //// console.log(`queryTasks: ${queryTasks}`);

        instanceBundle.push(viewPreference);
        if (queryProjects === true) {
            for (let i = 0; i < localStorage.length; i++) {
                let storageKey = localStorage.key(i);
                let item = JSON.parse(localStorage.getItem(storageKey));
                console.log(item);
                if ((item.type === 'project') && (item.id == queryReference)) {
                    instanceBundle.splice(1, 0, item);
                } else if ((item.type !== 'project') && (item.projectID == queryReference)) {
                    instanceBundle.push(item);
                };
            };
        } else if (queryTasks === true) {   // ! reduce repetition
            switch (viewPreference) {
                case 'All':
                    for (let i = 0; i < localStorage.length; i++) {
                        let storageKey = localStorage.key(i);
                        let item = JSON.parse(localStorage.getItem(storageKey));
                        if (item.type !== 'project') {
                            instanceBundle.push(item);
                        };
                    };
                    break;
                case 'Today':
                    for (let i = 0; i < localStorage.length; i++) {
                        let storageKey = localStorage.key(i);
                        let item = JSON.parse(localStorage.getItem(storageKey));
                        if (item.type !== 'project' && item.dueDate === queryReference) {
                            instanceBundle.push(item);
                        };
                    };
                    break;
                case 'Upcoming':
                    for (let i = 0; i < localStorage.length; i++) {
                        let storageKey = localStorage.key(i);
                        let item = JSON.parse(localStorage.getItem(storageKey));
                        if (item.type !== 'project') {
                            for (let j = 0; j < (queryReference.length); j++) {
                                if (item.dueDate === queryReference[j]) {
                                    instanceBundle.push(item);
                                };
                            };
                        };
                    };
                    break;
                case 'Anytime':
                    for (let i = 0; i < localStorage.length; i++) {
                        let storageKey = localStorage.key(i);
                        let item = JSON.parse(localStorage.getItem(storageKey));
                        if (item.type !== 'project' && item.dueDate === queryReference) {
                            instanceBundle.push(item);
                        };
                    };
            };
        };

        console.log(instanceBundle);
        events.publish('updateDisplayView', instanceBundle);    // subscribed by display.js, forms.js
    }

    // create methods
    function _createProject(attributeArray) {
        let _id = _projectCounter;
        let _storageKey = `project_${_projectCounter}`;
        let _newProject = new Project(_id, ...attributeArray);
        console.log('new project:')
        console.log(_newProject);
        localStorage.setItem(_storageKey, JSON.stringify(_newProject));
        console.log(JSON.parse(localStorage.getItem(_storageKey)));
        console.log(`ls.length (create project): ${localStorage.length}`);
        _projectCounter++;

        events.publish('projectCreated', _newProject);  // subscribed by display.js, sidebar.js
    }
    function _createTask(attributeArray) {
        console.log(attributeArray);
        let _id = _taskCounter;
        let _storageKey = `task_${_taskCounter}`;
        let _newTask = new Task(_id, ...attributeArray);
        console.log('new task:')
        console.log(_newTask);
        localStorage.setItem(_storageKey, JSON.stringify(_newTask));
        console.log(JSON.parse(localStorage.getItem(_storageKey)));
        console.log(`ls.length (create task): ${localStorage.length}`);
        _taskCounter++;

        events.publish('taskCreated', _newTask);    // subscribed by displayDOM.js
    }
    function _createCheckbox(task, itemValue) {
        let checklistItemsLength = task.items.length;
        let newItemID;

        switch (checklistItemsLength) {
            case 0:
                newItemID = 0;
                break;
            default:
                let lastItemID = task.items[checklistItemsLength - 1][0];
                newItemID = lastItemID + 1;
        };

        itemValue[0] = newItemID;
        task.items.push(itemValue);
        localStorage.setItem(`task_${task.id}`, JSON.stringify(task));
        console.log(`ls.length (create checkbox): ${localStorage.length}`);
        let _newCheckbox = ['checkbox', task.id, task.items[checklistItemsLength][0], task.items[checklistItemsLength][1]];
        
        console.log('new checkbox:')
        console.log(task.items);

        events.publish('checkboxCreated', _newCheckbox);    // subscribed by domDisplay.js
    }

    // modify methods
    function _modifyProject(targetItemID, attributeArray) {
        //// console.log(attributeArray)
        let projectInstance;
        let storageKey = `project_${targetItemID}`;
        console.log(storageKey);
        projectInstance = JSON.parse(localStorage.getItem(storageKey));
        console.log(projectInstance);
        //// console.log('original project instance:')
        //// console.log(projectInstance);
        for (let a = 0; a < (attributeArray.length); a++) {
            let value = attributeArray[a];
            switch(a) {
                case 0:
                    if (projectInstance.title !== value) {
                        projectInstance.title = value;
                    };
                    break;
                case 1:
                    if (projectInstance.description !== value) {
                        projectInstance.description = value;
                    };
                    break;
                case 2:
                    if (projectInstance.icon !== value) {
                        projectInstance.icon = attributeArray[2];
                    };
            };
        };
        console.log('modified project instance:')
        console.log(projectInstance);
        localStorage.setItem(storageKey, JSON.stringify(projectInstance));
        console.log(localStorage.length);

        console.log(projectInstance);

        events.publish('itemModified', projectInstance);  // subscribed by domDisplay.js, domSidebar.js
    }
    function _modifyTask(targetItemID, attributeArray) {
        //// console.log(attributeArray);
        let taskInstance;
        let storageKey = `task_${targetItemID}`;
        console.log(storageKey);
        taskInstance = JSON.parse(localStorage.getItem(storageKey));
        console.log(taskInstance);
        //// console.log('original task instance:')
        //// console.log(taskInstance);
        for (let a = 1; a < (attributeArray.length); a++) {
            let value = attributeArray[a];
            // [type, title, description, dueDate, 'priority', 'projectID']
            switch(a) {
                case 1:
                    if (taskInstance.title !== value) {
                        taskInstance.title = value;
                    };
                    break;
                case 2:
                    if (taskInstance.title !== value) {
                        taskInstance.description = value;  
                    };
                    break;
                case 3:
                    if (taskInstance.title !== value) {
                        taskInstance.dueDate = value;
                    };
                    break;
                case 4:
                    if (taskInstance.title !== value) {
                        taskInstance.priority = parseInt(value);  
                    };
                    break;
                case 5:
                    if (taskInstance.title !== value) {
                        taskInstance.projectID = parseInt(value);  
                    };
            };
        };
        console.log('modified task instance:')
        console.log(taskInstance);
        localStorage.setItem(storageKey, JSON.stringify(taskInstance));
        console.log(localStorage.length);

        events.publish('itemModified', taskInstance);  // subscribed by domDisplay.js, domSidebar.js
    }
    function _modifyCheckbox(taskInstance, targetItemID, targetContent) {
        console.log(taskInstance);
        console.log(targetItemID);
        console.log(targetContent);
        //// console.log(targetItemID, targetContent);
        let checkboxInstance;
        let targetChecklistItems = taskInstance.items;
        for (let i = 0; i < (targetChecklistItems.length); i++) {
            if (targetChecklistItems[i][0] == targetItemID) {
                if (taskInstance.items[i][1] !== targetContent) {
                    taskInstance.items[i][1] = targetContent;
                };
                checkboxInstance = ['checkbox', taskInstance.id, targetItemID, targetContent];
            };
        };
        //// console.log('original task (checkbox) instance:')
        //// console.log(taskInstance);
        console.log('modified task (checkbox) instance:')
        console.log(taskInstance.items);
        localStorage.setItem(`task_${taskInstance.id}`, JSON.stringify(taskInstance));

        events.publish('itemModified', checkboxInstance);   // subscribed by domDisplay.js
    }

    // delete methods
    function _deleteProject(cardID) {
        console.log(cardID);
        let cardReferences = cardID.split('_');
        let projectReference = cardReferences[1];
        localStorage.removeItem(cardID);

        let loopStart = localStorage.length - 1;
        for (let i = loopStart; i > -1; i--) {
            let storageKey = localStorage.key(i);
            let storageObject = JSON.parse(localStorage.getItem(storageKey));
            if (storageObject.type !== 'project') {
                if (storageObject.projectID == projectReference) {
                    localStorage.removeItem(storageKey);
                };
            };
        };

        console.log('project delete results:')
        console.log(_projectLibrary);
        console.log(_taskLibrary);

        events.publish('removeProjectFromSection', cardID);    // subscribed by display.js, sidebar.js
    }
    function _deleteTask(cardID) {
        console.log(cardID);
        let cardReferences = cardID.split('_');
        let taskReference = cardReferences[1];
        localStorage.removeItem(cardID);

        console.log('task delete results:')
        console.log(_taskLibrary);

        events.publish('removeTaskFromDisplay', cardID);    // subscribed by domDisplay.js
    }
    function _deleteChecklistItem(event) {
        let checkID = event.target.closest('li.card').id;
        console.log(checkID);
        let taskReference = checkID.split('__')[0];
        let checkReference = checkID.split('__')[1].split('_')[1];
        let taskInstance = JSON.parse(localStorage.getItem(taskReference));
        let checklistItemsArray = taskInstance.items;
        for (let i = 0; i < (checklistItemsArray.length); i++) {
            if (checklistItemsArray[i][0] == checkReference) {
                checklistItemsArray.splice(i, 1);
                console.log('checklist item delete results:');
                console.log(checklistItemsArray);
            };
        };
        localStorage.setItem(cardID, JSON.stringify(itemInstance));

        events.publish('removeChecklistItemFromDisplay', checkID);  // subscribed by domDisplay.js
    }

    // event subscriptions

    events.subscribe('openViewPreferenceQuery', _bundleInstances) // published from sidebar.js (_changeViewPreferencek())

    events.subscribe('confirmInput', _setInstanceValues); //published from default.js (init()), forms.js (_confirmInput())

    events.subscribe('openModifyInstanceQuery', _queryItemInstance);    // published from forms.js (_openModifyQuery())
    events.subscribe('openProjectOptionsQuery', _queryProjectNamesIDs)  // published from forms.js (_showForm())

    events.subscribe('confirmDeleteProject', _deleteProject);    // published from forms.js (confirmDeleteButton eventListener)
    events.subscribe('clickDeleteTask', _deleteTask);    // published from display.js (_render...(task)Headers())
    events.subscribe('clickDeleteChecklistItem', _deleteChecklistItem)  // published from display.js (_renderCheckboxControls())
})();