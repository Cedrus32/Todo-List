import events from '../events';

// & backend manager module containing project/task classes & methods

const library = (() => {
    // dynamic data
    let taskCount;
    let projectCount;

    // state methods
    function setCounters() {
        console.log(`project counter (for ID & state check): ${localStorage.getItem('projectCount')}`)
        if ((localStorage.getItem('projectCount') === null) || (localStorage.length === 3)) {
            taskCount = 0;
            localStorage.setItem('taskCount', taskCount);
            projectCount = 0;
            localStorage.setItem('projectCount', projectCount);
        } else {
            taskCount = parseInt(JSON.parse(localStorage.getItem('taskCount')));
            projectCount = parseInt(JSON.parse(localStorage.getItem('projectCount')));
        };
    }
    function upProjectCount() {
        projectCount++;
        localStorage.setItem('projectCount', projectCount);
    }
    function upTaskCount() {
        taskCount++;
        localStorage.setItem('taskCount', taskCount);
    }

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
    }

    // setter
    function _setInstanceValues(values) {
        let libraryReference = values[0];
        let instanceReference = values[1];
        values.splice(0, 2);    // [title, description]
                                // [type, title, description, dueDate, 'priority', 'projectID', [tags]]
        // console.log(instanceReference);
        // console.log(values);


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
    function _bundleStartupData() {
        let instanceBundle = [];
        for (let i = 0; i < localStorage.length; i++) {
            let storageKey = localStorage.key(i);
            let item = JSON.parse(localStorage.getItem(storageKey));
            if (item.type === 'project') {
                instanceBundle.push(item);
            };
        };

        let sortedBundle = _sortStartupProjects(instanceBundle);
        console.log(sortedBundle);
        events.publish('closeGetStartupDataQuery', sortedBundle); // subscribed by startup.js
    }
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
                let projectTitle = item.title;
                let projectID = item.id;
                nameIDArray.push([projectTitle, projectID]);
            };
        };

        // ** sort nameIDArray by projectID

        events.publish('closeProjectOptionsQuery', nameIDArray) // subscribed by forms.js
    }
    function _bundleInstances(viewPreference, queryReference) {
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

                if ((item.type === 'project') && (item.id == queryReference)) {
                    instanceBundle.splice(1, 0, item);
                } else if ((item.type !== 'project') && (item.projectID == queryReference)) {
                    instanceBundle.push(item);
                };
            };
        } else if (queryTasks === true) {
            for (let i = 0; i < localStorage.length; i++) {
                let storageKey = localStorage.key(i);
                let item = JSON.parse(localStorage.getItem(storageKey));

                switch (viewPreference) {
                    case 'All':
                        if (item.type === 'singleton' || item.type === 'checklist') {
                            instanceBundle.push(item);
                        };
                        break;
                    case 'Today':
                        if ((item.type === 'singleton' || item.type === 'checklist') && item.dueDate === queryReference) {
                            instanceBundle.push(item);
                        };
                        break;
                    case 'Upcoming':
                        if (item.type === 'singleton' || item.type === 'checklist') {
                            for (let j = 0; j < (queryReference.length); j++) {
                                if (item.dueDate === queryReference[j]) {
                                    instanceBundle.push(item);
                                };
                            };
                        };
                        break;
                    case 'Anytime':
                        if ((item.type === 'singleton' || item.type === 'checklist') && item.dueDate === queryReference) {
                            instanceBundle.push(item);
                        };
                };
            };
        };

        let sortedBundle = _sortSwitch(instanceBundle);

        events.publish('updateDisplayView', sortedBundle);    // subscribed by display.js
        events.publish('setCurrentProject', sortedBundle[1]);    // subscribed by forms.js
    }

    // sort methods
    function _sortSwitch(array) {
        let sortPreference = array[0];
        let sortedArray;
        switch (sortPreference) {
            case 'Upcoming':
                sortedArray = _sortByDueDate(array);
                break;
            case 'project':
                sortedArray = _sortByTaskID(array);
                break;
            default:
                sortedArray = _sortByProjectID(array);
        };

        return sortedArray;
    }
    function _sortStartupProjects(array) {
        let sortingArray = true;
        while (sortingArray === true) {
            sortingArray = false;

            let currentItem;
            let nextItem;
            for (let i = 0; i < array.length - 1; i++) {
                currentItem = array[i];
                nextItem = array[i + 1];

                if (parseInt(currentItem.id) > parseInt(nextItem.id)) {
                    array.splice(i + 1, 1); // at next index, remove 1 item
                    array.splice(i, 0, nextItem);   // at current index, add 1 item
                    sortingArray = true;
                    break;
                };
            };
        };

        return array;
    }
    function _sortByProjectID(array) {
        // initialize & populate groups
        let groupedTasks = [];
        let groupCounter = 0;
        for (let i = 1; i < (array.length); i++) {
            let item = array[i];
            if (i === 1) {
                groupedTasks[groupCounter] = [];
                groupedTasks[groupCounter].push(item);
                groupCounter++;
            } else {
                let existingGroupsLength = groupedTasks.length;
                for (let j = 0; j < existingGroupsLength; j++) {
                    if (groupedTasks[j][0].projectID === item.projectID) {
                        groupedTasks[j].push(item);
                        break;
                    } else if (j === existingGroupsLength - 1 && groupedTasks[j][0].projectID !== item.projectID) {
                        groupedTasks[groupCounter] = [];
                        groupedTasks[groupCounter].push(item);
                        groupCounter++;
                    };
                };
            };
        };
        array = [array[0]];
        //// console.log(groupedTasks);
        //// console.log(array);

        // sort groups
        let sortingGroups = true;
        while (sortingGroups === true) {
            sortingGroups = false;

            for (let i = 0; i < (groupedTasks.length - 1); i++) {
                let currentGroup = groupedTasks[i];
                let nextGroup = groupedTasks[i + 1];

                if (parseInt(currentGroup[0].projectID) > parseInt(nextGroup[0].projectID)) {
                    groupedTasks.splice(i + 1, 1);  // at next index, remove 1 item
                    groupedTasks.splice(i, 0, nextGroup);   // at current index, add 1 item
                    sortingGroups = true;
                    break;
                };
            };
        };
        //// console.log(groupedTasks);

        // sort tasks inside groups
        for (let i = 0; i < groupedTasks.length; i++) {
            let currentGroup = groupedTasks[i];

            let sortingTasks = true;
            while (sortingTasks === true) {
                sortingTasks = false;

                for (let j = 0; j < currentGroup.length - 1; j++) {
                    let currentTask = currentGroup[j];
                    let nextTask = currentGroup[j + 1];

                    if (parseInt(currentTask.id) > parseInt(nextTask.id)) {
                        currentGroup.splice(j + 1, 1);   // at next index, remove 1 item
                        currentGroup.splice(j, 0, nextTask); // at current index, add 1 item
                        sortingTasks = true;
                        break;
                    };
                };
            };
        };
        //// console.log(groupedTasks);

        // re-populate array...
        for (let i = 0; i < (groupedTasks.length); i++) {
            let currentProject = groupedTasks[i];
            for (let j = 0; j < (currentProject.length); j++) {
                let currentTask = currentProject[j];
                array.push(currentTask);
            };
        };
        //// console.log(array);

        return array;
    }
    function _sortByTaskID(array) {
        for (let i = 1; i < array.length; i++) {
            let currentItem = array[i];
            if (currentItem.type === 'project' && i !== 1) {
                let projectItem = array[i];
                array.splice(i, 1); // at current index, remove 1 item
                array.splice(1, 0, projectItem);    // at index 1, add 1 item
                sortingTasks = true;
                break;
            };
        };

        let sortingTasks = true;
        while (sortingTasks === true) {
            sortingTasks = false;
            for (let i = 2; i < array.length - 1; i++) {
                let currentTask = array[i];
                let nextTask = array[i + 1];

                if (parseInt(currentTask.id) > parseInt(nextTask.id)) {
                    console.log(`index... ${i}`);
                    console.log('currentTask...');
                    console.log(currentTask.id);
                    console.log('nextTask...');
                    console.log(nextTask.id);

                    array.splice(i + 1, 1); // at current index, remove 1 item
                    array.splice(i, 0, nextTask);   // at current index, add 1 item
                    sortingTasks = true;
                    break;
                };
            };
        };

        return array;
    }
    function _sortByDueDate(array) {
        // initialize & populate date groups
        let groupedTasks = [];
        let groupCounter = 0;
        for (let i = 1; i < (array.length); i++) {
            let item = array[i];
            if (i === 1) {
                groupedTasks[groupCounter] = [];
                groupedTasks[groupCounter].push(item);
                groupCounter++;
            } else {
                let existingGroupsLength = groupedTasks.length;
                for (let j = 0; j < existingGroupsLength; j++) {
                    if (groupedTasks[j][0].dueDate === item.dueDate) {
                        groupedTasks[j].push(item);
                        break;
                    } else if (j === existingGroupsLength - 1 && groupedTasks[j][0].dueDate !== item.dueDate) {
                        groupedTasks[groupCounter] = [];
                        groupedTasks[groupCounter].push(item);
                        groupCounter++;
                    };
                };
            };
        };
        array = [array[0]];
        //// console.log(groupedTasks);
        //// console.log(array);

        // sort dates
        let sortingDates = true;
        while (sortingDates === true) {
            sortingDates = false;
            
            for (let i = 0; i < groupedTasks.length - 1; i++) {
                let currentGroup = groupedTasks[i];
                let nextGroup = groupedTasks[i + 1];

                if (currentGroup[0].dueDate > nextGroup[0].dueDate) {
                    groupedTasks.splice(i + 1, 1);  // at next index, remove 1 item
                    groupedTasks.splice(i, 0, nextGroup);   // at current index, add 1 item
                    sortingDates = true;
                    break;
                };
            };
        };
        //// console.log(groupedTasks);

        // initialize & populate project groups
        for (let i = 0; i < (groupedTasks.length); i++) {
            let groupedProjects = [];
            groupCounter = 0;
            for (let j = 0; j < (groupedTasks[i].length); j++) {
                let item = groupedTasks[i][j];
                if (j === 0) {
                    groupedProjects[groupCounter] = [];
                    groupedProjects[groupCounter].push(item);
                    groupCounter++;
                } else {
                    let existingGroupsLength = groupedProjects.length;
                    for (let k = 0; k < existingGroupsLength; k++) {
                        if (groupedProjects[k][0].projectID === item.projectID) {
                            groupedProjects[k].push(item);
                            break;
                        } else if (k === existingGroupsLength - 1 && groupedProjects[k][0].projectID !== item.projectID) {
                            groupedProjects[groupCounter] = [];
                            groupedProjects[groupCounter].push(item);
                            groupCounter++;
                        };
                    };
                };
            };
            groupedTasks[i] = groupedProjects;
        };
        //// console.log(groupedTasks);

        // sort projects inside groups
        let sortingProjects = true;
        while (sortingProjects === true) {
            sortingProjects = false;

            for (let i = 0; i < groupedTasks.length; i++) {
                let dateGroup = groupedTasks[i];
                for (let j = 0; j < (dateGroup.length - 1); j++) {
                    let currentProjectGroup = dateGroup[j];
                    let nextProjectGroup = dateGroup[j + 1];

                    if (currentProjectGroup[0].projectID > nextProjectGroup[0].projectID) {
                        dateGroup.splice(j + 1, 1);  // at next index, remove 1 item
                        dateGroup.splice(j, 0, nextProjectGroup);    // at current index, add 1 item
                        sortingProjects = true;
                        break;
                    };
                };
            };
        };
        //// console.log(groupedTasks);

        // sort tasks inside projects
        let sortingTasks = true;
        while (sortingTasks === true) {
            sortingTasks = false;

            for (let i = 0; i < (groupedTasks.length); i++) {
                let dateGroup = groupedTasks[i];
                for (let j = 0; j < (dateGroup.length); j++) {
                    let projectGroup = dateGroup[j];
                    for (let k = 0; k < (projectGroup.length - 1); k++) {
                        let currentTask = projectGroup[k];
                        let nextTask = projectGroup[k + 1];

                        if (currentTask.id > nextTask.id) {
                            projectGroup.splice(k + 1, 1);  // at next index, remove 1 item
                            projectGroup.splice(k, 0, nextTask);    // at current index, add 1 item
                            sortingTasks = true;
                            break;
                        };
                    };
                };
            };
        };
        //// console.log(groupedTasks);

        // repopulate array
        for (let i = 0; i < (groupedTasks.length); i++) {
            let currentDate = groupedTasks[i];
            for (let j = 0; j < (currentDate.length); j++) {
                let currentProject = currentDate[j];
                for (let k = 0; k < (groupedTasks[i][j].length); k++) {
                    let currentTask = currentProject[k];
                    array.push(currentTask);
                };
            };
        };
        //// console.log(array);

        return array;
    }

    // create methods
    function _createProject(attributeArray) {
        let _id = projectCount;
        let _storageKey = `project_${projectCount}`;
        let _newProject = new Project(_id, ...attributeArray);
        console.log('new project:')
        //// console.log(_newProject);
        localStorage.setItem(_storageKey, JSON.stringify(_newProject));
        console.log(JSON.parse(localStorage.getItem(_storageKey)));
        console.log(`ls.length (create project): ${localStorage.length}`);
        // _projectCounter++;
        upProjectCount();

        events.publish('projectCreated', _newProject);  // subscribed by display.js, sidebar.js
    }
    function _createTask(attributeArray) {
        //// console.log(attributeArray);
        let _id = taskCount;
        let _storageKey = `task_${taskCount}`;
        let _newTask = new Task(_id, ...attributeArray);
        console.log('new task:')
        // console.log(_newTask);
        localStorage.setItem(_storageKey, JSON.stringify(_newTask));
        console.log(JSON.parse(localStorage.getItem(_storageKey)));
        console.log(`ls.length (create task): ${localStorage.length}`);
        // _taskCounter++;
        upTaskCount();

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
        
        // console.log('new checkbox:')
        // console.log(task.items);

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
        // console.log('modified project instance:')
        // console.log(projectInstance);
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
        // console.log('modified task instance:')
        // console.log(taskInstance);
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
        // console.log('modified task (checkbox) instance:')
        // console.log(taskInstance.items);
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

        events.publish('removeProjectFromSection', cardID);    // subscribed by display.js, sidebar.js
    }
    function _deleteTask(cardID) {
        console.log(cardID);
        let cardReferences = cardID.split('_');
        let taskReference = cardReferences[1];
        localStorage.removeItem(cardID);

        console.log('task delete results:')
        // console.log(_taskLibrary);

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

    events.subscribe('setCountersOnPageLoad', setCounters); // published from startup.js
    events.subscribe('openGetLocalDataQuery', _bundleStartupData);    // published from startup.js
    events.subscribe('resetCounters', setCounters); // published from sidebar.js
})();