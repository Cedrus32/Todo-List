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

    // project manager
    const _renderProject = function(project) {
        let cardID = '#project_' + project.id;
        let projectCard = div('', '.card', '.project', cardID);

        _renderProjectCardContents(projectCard, project);

        projectContainer.appendChild(projectCard);

        _fillTaskCounter('');
    }
    const _renderProjectCardContents = function(targetCard, item) {
        let projectHeader = _renderProjectHeader(item.title);
        let projectDescription = div(item.description, '.description');

        targetCard.appendChild(projectHeader);
        targetCard.appendChild(projectDescription);
    }

    // task managers
    const _renderTask = function(task) {
        let cardID = '#task_' + task.id;
        let taskCard;
        if (task.type === 'singleton') {
            taskCard = div('', '.card', '.singleton', cardID)
            _renderSingletonCardContents(taskCard, task);
        } else if (task.type === 'checklist') {
            taskCard = div('', '.card', '.checklist', cardID);
            _renderChecklistCardContents(taskCard, task);
        };
        taskContainer.appendChild(taskCard);

        _fillTaskCounter('+');
    }
    const _renderSingletonCardContents = function(targetCard, item) {
        let singletonCheckmark = input(item.id);
        let taskCardContent = _renderSingletonInfo(item.id, item.title, item.dueDate, item.description, item.priority, item.tags);

        targetCard.appendChild(singletonCheckmark);
        targetCard.appendChild(taskCardContent);
    }
    const _renderChecklistCardContents = function(targetCard, item) {
        let checklistHeader = _renderChecklistHeader(item.title, item.dueDate);
        let checklistDescription = div(item.description, '.description');
        let checklistContent = _renderChecklistContent(targetCard.id, item.items);
        let checklistDetails = _renderTaskDetails(item.priority, item.tags);

        targetCard.appendChild(checklistHeader);
        targetCard.appendChild(checklistDescription);
        targetCard.appendChild(checklistContent);
        targetCard.appendChild(checklistDetails);
    }
    const _renderCheckboxLabel = function(targetContainerID, content, targetCheckboxID) {
        let liContainer = document.getElementById(targetContainerID);
        let checkboxLabel = label(content, targetCheckboxID, '');
        liContainer.insertBefore(checkboxLabel, liContainer.lastChild);
    }

    // helper factories
    const _renderProjectHeader = function(title) {
        let divHeader = div('', '.header');

        let h1Title = h1(title, '.title');
        let spanModify = span('...', '.project', '.modify');
        let spanDelete = span('X', '.delete');

        // * project modify/delete events
        spanModify.addEventListener('click', (e) => {
            events.publish('clickModifyItem', e);   // subscribed by forms.js
        });
        spanDelete.addEventListener('click', (e) => {
            let cardID = e.target.closest('div.card').id;
            events.publish('clickDeleteProject', cardID);   // subscribed by forms.js
        });

        divHeader.appendChild(h1Title);
        divHeader.appendChild(spanModify);
        divHeader.appendChild(spanDelete);

        return divHeader;
    }
    const _renderSingletonHeader = function(id, title, dueDate) {
        let divHeader = div('', '.header');

        let h2TitleContent = h2(title, '');
        let labelCheckmarkTitle = label('', id, '.title');
        labelCheckmarkTitle.appendChild(h2TitleContent);

        let spanDate = span(dueDate, '.date');
        let spanModify = span('...', '.task', '.modify');
        let spanDelete = span('X', '.delete');

        // * singleton modify/delete events
        spanModify.addEventListener('click', (e) => {
            events.publish('clickModifyItem', e);   // subscribed by forms.js
        });
        spanDelete.addEventListener('click', (e) => {    // subscribed by library.js
            let taskCardID = e.target.closest('div.card').id;
            events.publish('deleteTask', taskCardID);   // subscribed by library.js
        });

        divHeader.appendChild(labelCheckmarkTitle);
        divHeader.appendChild(spanDate);
        divHeader.appendChild(spanModify);
        divHeader.appendChild(spanDelete);

        return divHeader;
    }
    const _renderChecklistHeader = function(title, dueDate) {
        let divHeader = div('', '.header');

        let h2Title = h2(title, '.title');
        let spanDate = span(dueDate, '.date');
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

        divHeader.appendChild(h2Title);
        divHeader.appendChild(spanDate);
        divHeader.appendChild(spanModify);
        divHeader.appendChild(spanDelete);

        return divHeader;
    }
    const _renderSingletonInfo = function(id, title, dueDate, description, priority, tags) {
        let divContent = div('', '.content');

        let taskHeader = _renderSingletonHeader(id, title, dueDate);
        let taskDescription = div(description, '.description');
        let taskDetails = _renderTaskDetails(priority, tags);

        divContent.appendChild(taskHeader);
        divContent.appendChild(taskDescription);
        divContent.appendChild(taskDetails);

        return divContent;
    }
    const _renderChecklistContent = function(parentID, items) {
        // let divChecks = div('', '.checks'); // ? remove and just use ul ? //

        let ulItem = ul('', '.checks');
        for (let i = 0; i < (items.length); i++) {
            let checklistItem = _renderChecklistItem(parentID, items[i]);
            ulItem.appendChild(checklistItem);
        };
        // divChecks.appendChild(ulItem);
        
        return ulItem;
    }
    const _renderChecklistItem = function(taskReference, checkInfo) {
        let checkID = checkInfo[0];
        let checkContent = checkInfo[1];

        let liItemID = `#${taskReference}__li_${checkID}`;
        let liItem = li('', '.card', liItemID);

        let checklistItemID = `${taskReference}__checkbox_${checkID}`;  // # not needed vv
        let checkbox = input(checklistItemID);  // sets ID directly via default object prototype methods
        let labelItem = label(checkContent, checklistItemID, '');
        let checklistItemControls = _renderChecklistItemControls(checklistItemID);

        liItem.appendChild(checkbox);
        liItem.appendChild(labelItem);
        liItem.appendChild(checklistItemControls);

        return liItem;
    }
    const _renderChecklistItemControls = function(checkID) {
        let divControls = div('', '.checklist-item-controls');

        let spanModify = span('...', '.task', '.modify');
        let spanDelete = span('X', '.delete');

        // * checklist item modify/delete events
        spanModify.addEventListener('click', (e) => {
            events.publish('clickModifyItem', e);    // subscribed by forms.js
        });
        spanDelete.addEventListener('click', () => {
            // ? look at other modify events ^^^, use e to catch ID ?
            events.publish('clickDeleteChecklistItem', checkID);    // subscribed by library.js
        });

        divControls.appendChild(spanModify);
        divControls.appendChild(spanDelete);

        return divControls;
    }
    const _renderTaskDetails = function(priority, tags) {
        let divDetails = div('', '.details');

        let divPriority = div(priority, '.priority');
        let divTags = div(tags, '.tags');

        divDetails.appendChild(divPriority);
        divDetails.appendChild(divTags);

        return divDetails;
    }

    // other methods
    function _updateItem(itemInstance) {
        //// console.log(itemInstance);
        if (itemInstance.type === 'project') {
            let cardID = `project_${itemInstance.id}`;
            let cardElement = document.getElementById(cardID);
            _deleteItemContent(cardID);
            _renderProjectCardContents(cardElement, itemInstance);
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
            let liID = `task_${taskReference}__li_${checkboxReference}`;
            let checkboxID = `task_${taskReference}__checkbox_${checkboxReference}`;

            _deleteItemContent(liID);
            _renderCheckboxLabel(liID, checkboxContent, checkboxID);
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

    // bind events
    // * modify & delete click events in _renderHeader()'s ^^^
    createTaskButton.addEventListener('click', () => {
        events.publish('clickCreateItem', 'task');  // subscribed by forms.js
    });
    events.subscribe('renderProject', _renderProject)   // published from display.js (_renderDisplay())
    events.subscribe('renderTask', _renderTask);    // published from display.js (_renderDisplay())
    events.subscribe('removeTaskFromDisplay', _deleteTaskCard); // published from library.js (_deleteTask())
    events.subscribe('removeProjectFromDisplay', _clearDisplay) // published from library.js (_deleteProject())
    events.subscribe('itemModified', _updateItem);    // published from library.js (_modifyItems())
    events.subscribe('removeChecklistItemFromDisplay', _deleteChecklistItem)    // published from library.js (_deleteChecklistItem())
})();