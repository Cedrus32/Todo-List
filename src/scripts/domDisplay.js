import events from '../events';
import { default as div, h1, h2, ul, li, span, input, label} from './elements';

// * factory module for display DOM groupings

const domDisplay = (() => {
    // data
    let _taskCounter = 0;

    // cache DOM
    let projectContainer = document.getElementById('project-container');
    let taskContainer = document.getElementById('task-container');
    let taskCountSpan = document.querySelector('div.tally span');
    let createTaskButton = document.querySelector('div.task-controls div.create');

    // display manager
    function _updateDisplayView(instanceBundle) {
        console.log(instanceBundle);
        let bundledBy = instanceBundle[0];
        console.log(bundledBy);

        _clearDisplay()
        if (bundledBy === 'all') {
            let taskHeader = h1(instanceBundle[0], '');
            console.log(taskHeader);
            projectContainer.appendChild(taskHeader);
            for (let i = 1; i < (instanceBundle.length); i++) {
                _renderTask(instanceBundle[i]);
            };
        } else if (bundledBy === 'project') {
            for (let i = 1; i < (instanceBundle.length); i++) {
                if (i === 1) {
                    _renderProject(instanceBundle[i]);
                } else {
                    _renderTask(instanceBundle[i]);
                };
            };
        } else if (bundledBy === 'tag') {
            let tagHeader = h1(instanceBundle[1], '');
            projectContainer.appendChild(tagHeader);
            for (let i = 2; i < (instanceBundle.length); i++) {
                _renderTask(instanceBundle[i]);
            };
        };
    }

    // display helpers
    function _updateItem(itemInstance) {
        //// console.log(itemInstance);
        if (itemInstance.type === 'project') {
            let cardID = `project_${itemInstance.id}`;
            let card = document.getElementById(cardID);
            for (let i = 0; i < (card.children.length); i++) {
                switch(i) {
                    case 0:
                        let title = card.querySelector('.title');
                        title.textContent = itemInstance.title;
                        break;
                    case 1:
                        let description = card.querySelector('.description');
                        description.textContent = itemInstance.description;
                };
            };
        } else if (itemInstance.type === 'singleton' || itemInstance.type === 'checklist') {
            let cardID = `task_${itemInstance.id}`;
            let cardElement = document.getElementById(cardID);
            _deleteItemContent(cardID);
            if (itemInstance.type === 'singleton') {
                _renderSingletonCardContents(cardElement, itemInstance);
            } else if (itemInstance.type === 'checklist') {
                _renderChecklistCardContents(cardElement, itemInstance);
            };
        } else if (itemInstance[0] === 'checkbox') {
            let taskReference = itemInstance[1];
            let checkboxReference = itemInstance[2];
            let checkboxContent = itemInstance[3];
            let liContainerID = `task_${taskReference}__li_${checkboxReference}`;   // used to getElementById, no # needed
            let checkboxID = `task_${taskReference}__checkbox_${checkboxReference}`; // used as forReference, no # needed

            _deleteItemContent(liContainerID);
            _renderNewCheckboxLabel(liContainerID, checkboxID, checkboxContent);
        }
    }
    function _clearDisplay() {
        while (projectContainer.children.length > 0) {
            projectContainer.removeChild(projectContainer.lastChild);
        };
        while (taskContainer.children.length > 1) {
            taskContainer.removeChild(taskContainer.lastChild);
            _fillTaskCounter('-');
        };
    }
    function _deleteTaskCard(id) {
        let targetTask = document.getElementById(id);
        taskContainer.removeChild(targetTask)
        _fillTaskCounter('-');
    }
    function _deleteItemContent(id) {
        let targetItem = document.getElementById(id);
        if (id.includes('__')) {
            targetItem.removeChild(targetItem.children[1]);
        } else {
            while (targetItem.children.length > 0) {
                targetItem.removeChild(targetItem.lastChild);
            };
        };
    }
    function _deleteChecklistItem(id) {
        let liContainer = document.querySelector(`input#${id}`).parentElement;
        let ulContainer = liContainer.parentElement;
        ulContainer.removeChild(liContainer);
    }
    function _fillTaskCounter(operator) {
        if (operator === '+') {
            _taskCounter++;
        } else if (operator === '-') {
            _taskCounter--;
        }
        taskCountSpan.textContent = _taskCounter;
    }
    
    // project factories
    const _renderProject = function(project) {
        if (projectContainer.children) {
            _clearDisplay();
        };
        let cardID = '#project_' + project.id;
        let projectCard = div('', '.card', '.project', cardID);

        let projectHeader = _renderProjectHeader(project.title);
        let projectDescription = div(project.description, '.description');

        projectCard.append(projectHeader, projectDescription);
        projectContainer.appendChild(projectCard);

        _fillTaskCounter('');
    }
    const _renderProjectHeader = function(title) {
        let divHeader = div('', '.header');

        let h1Title = h1(title, '.title');
        let spanModify = span('...', '.project', '.modify');
        let spanDelete = span('X', '.delete');

        // * project modify/delete events
        spanModify.addEventListener('click', (e) => {   // ! align to pass similar arguments?
            events.publish('clickModifyItem', e);   // subscribed by forms.js
        });
        spanDelete.addEventListener('click', (e) => {
            let cardID = e.target.closest('div.card').id;
            events.publish('clickDeleteProject', cardID);   // subscribed by forms.js
        });

        divHeader.append(h1Title, spanModify, spanDelete);
        return divHeader;
    }

    // task factories
    const _renderTask = function(task) {
        let cardID = '#task_' + task.id;
        let taskCard;

        if (task.type === 'singleton') {
            taskCard = div('', '.card', '.singleton', cardID)
            let singletonCheckmark = input(task.id);
            let singletonCardContent = _renderSingletonContent(task.id, task.title, task.dueDate, task.description, task.priority);
            taskCard.append(singletonCheckmark, singletonCardContent);
        } else if (task.type === 'checklist') {
            taskCard = div('', '.card', '.checklist', cardID);
            let checklistCardContent = _renderChecklistCardContents(task.title, task.description, task.dueDate, task.priority);
            let checklistItems = _renderChecklistItems(cardID, task.items);
            taskCard.append(checklistCardContent, checklistItems);
        };

        taskContainer.appendChild(taskCard);

        _fillTaskCounter('+');
    }
    const _renderSingletonContent = function(id, title, dueDate, description, priority) {
        let divContent = div('', '.content');

        let taskHeader = _renderSingletonHeader(id, title, dueDate, priority);
        let taskDescription = div(description, '.description');

        divContent.append(taskHeader, taskDescription);
        return divContent;
    }
    const _renderSingletonHeader = function(id, title, dueDate, priority) {
        let divHeader = div('', '.header');

        let labelCheckmarkTitle = label('', id, '.title');
        let h2TitleContent = h2(title, '');
        labelCheckmarkTitle.appendChild(h2TitleContent);

        let spanDate = span(dueDate, '.date');
        let spanPriority = span(priority, '.priority');
        let spanModify = span('...', '.task', '.modify');
        let spanDelete = span('X', '.delete');

        // * singleton modify/delete events
        spanModify.addEventListener('click', (e) => {   // ! align to pass similar arguments?
            events.publish('clickModifyItem', e);   // subscribed by forms.js
        });
        spanDelete.addEventListener('click', (e) => {    // subscribed by library.js
            let taskCardID = e.target.closest('div.card').id;
            events.publish('deleteTask', taskCardID);   // subscribed by library.js
        });

        divHeader.append(labelCheckmarkTitle, spanDate, spanPriority, spanModify, spanDelete);
        return divHeader;
    }
    const _renderChecklistCardContents = function(title, description, dueDate, priority) {
        let divContent = div('', '.content');
        let checklistHeader = _renderChecklistHeader(title, dueDate, priority);
        let checklistDescription = _renderChecklistSubheader(description);
        
        divContent.append(checklistHeader, checklistDescription);
        return divContent;
    }
    const _renderChecklistHeader = function(title, dueDate, priority) {
        let divHeader = div('', '.header');

        let h2Title = h2(title, '.title');
        let spanDate = span(dueDate, '.date');
        let spanPriority = span(priority, '.priority');
        let spanModify = span('...', '.task', '.modify');
        let spanDelete = span('X', '.delete');

        // * checklist modify/delete events
        spanModify.addEventListener('click', (e) => {
            events.publish('clickModifyItem', e);   // subscribed by forms.js
        });
        spanDelete.addEventListener('click', (e) => {
            let cardID = e.target.closest('div.card').id;
            events.publish('deleteTask', cardID);   // subscribed by library.js
        });

        divHeader.append(h2Title, spanDate, spanPriority, spanModify, spanDelete);
        return divHeader;
    }
    const _renderChecklistSubheader = function(description) {
        let divContainer = div('', '.description-container');
        
        let divDescription = div(description, '.description');
        let spanCreate = div('+', '.create');

        // * checklist item create event
        spanCreate.addEventListener('click', (e) => {
            let taskReference = e.target.closest('div.card').id.split('_')[1];
            console.log(taskReference);
            let formReferences = ['checkbox', taskReference];
            events.publish('clickCreateItem', formReferences);   // subscribed by forms.js
        });

        divContainer.appendChild(divDescription);
        divContainer.appendChild(spanCreate);

        return divContainer;
    }
    const _renderChecklistItems = function(taskCardID, items) {
        let ulItem = ul('', '.checkboxes');
        for (let i = 0; i < (items.length); i++) {
            let liCheckbox = _renderCheckbox(taskCardID, items[i]);
            ulItem.appendChild(liCheckbox);
        };
        
        return ulItem;
    }
    const _renderCheckbox = function(taskCardID, checkInfo) {
        console.log(checkInfo);
        let checkID = checkInfo[0];
        let checkContent = checkInfo[1];

        let liCardID = `#${taskCardID}__li_${checkID}`;
        let liCard = li('', '.card', liCardID);

        let checkboxID = `${taskCardID}__checkbox_${checkID}`;  // # not needed vv
        let checkbox = input(checkboxID);  // sets ID directly via default object prototype methods
        let labelCheckbox = label(checkContent, checkboxID, '');
        let checkboxControls = _renderCheckboxControls(checkboxID);

        liCard.append(checkbox, labelCheckbox, checkboxControls);
        return liCard;
    }
    const _renderCheckboxControls = function(checkID) {
        let divControls = div('', '.checklist-item-controls');

        let spanModify = span('...', '.task', '.modify');
        let spanDelete = span('X', '.delete');

        // * checklist item modify/delete events
        spanModify.addEventListener('click', (e) => {
            events.publish('clickModifyItem', e);    // subscribed by forms.js
        });
        spanDelete.addEventListener('click', () => {
            events.publish('clickDeleteChecklistItem', checkID);    // subscribed by library.js
        });

        divControls.appendChild(spanModify);
        divControls.appendChild(spanDelete);

        return divControls;
    }





    const _renderNewChecklistItem = function(checklistInstance) {
        let taskReference = `task_${checklistInstance[1]}`;
        let checklistItemID = checklistInstance[2];
        let checklistItemContent = checklistInstance[3];
        let checklistItemInfo = [checklistItemID, checklistItemContent]
        let ulTarget = document.querySelector(`div#${taskReference} ul`);

        _renderCheckbox(ulTarget, taskReference, checklistItemInfo);
    }
    const _renderNewCheckboxLabel = function(containerID, checklistItemID, content) {
        let liContainer = document.getElementById(containerID);
        let checkboxLabel = label(content, checklistItemID, '');
        liContainer.insertBefore(checkboxLabel, liContainer.lastChild);
    }


    // PHASING OUT
    const _renderSingletonCardContents = function(targetCard, item) {
        let singletonCheckmark = input(item.id);
        let taskCardContent = _renderSingletonContent(item.id, item.title, item.dueDate, item.description, item.priority, item.tags);

        targetCard.appendChild(singletonCheckmark);
        targetCard.appendChild(taskCardContent);
    }

    // bind events
    // * modify & delete click events in _renderHeader()'s ^^^
    // * create checklist item event in _renderChecklistDescritionContainer() ^^^
    createTaskButton.addEventListener('click', () => {
        events.publish('clickCreateItem', 'task');  // subscribed by forms.js
    });
    events.subscribe('renderProject', _renderProject)   // published from display.js (_publishRenderDisplayEvents())
    events.subscribe('renderTask', _renderTask);    // published from display.js (_publishRenderDisplayEvents())
    events.subscribe('removeTaskFromDisplay', _deleteTaskCard); // published from library.js (_deleteTask())
    events.subscribe('removeProjectFromSection', _clearDisplay) // published from library.js (_deleteProject())
    events.subscribe('itemModified', _updateItem);    // published from library.js (_modifyItems())
    events.subscribe('removeChecklistItemFromDisplay', _deleteChecklistItem)    // published from library.js (_deleteChecklistItem())
    events.subscribe('renderChecklistItem', _renderNewChecklistItem);  // published from display.js (_publishRenderDisplayEvents())
    events.subscribe('updateDisplayView', _updateDisplayView);  // published from library.js (_bundleInstances())
})();