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
        if (projectContainer.children) {
            _clearDisplay();
        };
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
        let checklistDescription = _renderChecklistDescriptionContainer(item.description);
        let checklistContent = _renderChecklistContent(targetCard.id, item.items);
        let checklistDetails = _renderTaskDetails(item.priority, item.tags, item.id);

        targetCard.appendChild(checklistHeader);
        targetCard.appendChild(checklistDescription);
        targetCard.appendChild(checklistContent);
        targetCard.appendChild(checklistDetails);
    }
    const _renderNewChecklistItem = function(checklistInstance) {
        let taskReference = `task_${checklistInstance[1]}`;
        let checklistItemID = checklistInstance[2];
        let checklistItemContent = checklistInstance[3];
        let checklistItemInfo = [checklistItemID, checklistItemContent]
        let ulTarget = document.querySelector(`div#${taskReference} ul`);

        _renderChecklistItem(ulTarget, taskReference, checklistItemInfo);
    }
    const _renderNewCheckboxLabel = function(containerID, checklistItemID, content) {
        let liContainer = document.getElementById(containerID);
        let checkboxLabel = label(content, checklistItemID, '');
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
        let taskDetails = _renderTaskDetails(priority, tags, id);

        divContent.appendChild(taskHeader);
        divContent.appendChild(taskDescription);
        divContent.appendChild(taskDetails);

        return divContent;
    }
    const _renderChecklistDescriptionContainer = function(description) {
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
    const _renderChecklistContent = function(parentID, items) {
        let ulItem = ul('', '.checks');
        for (let i = 0; i < (items.length); i++) {
            _renderChecklistItem(ulItem, parentID, items[i]);
        };
        
        return ulItem;
    }
    const _renderChecklistItem = function(ulContainer, taskReference, checkInfo) {
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

        ulContainer.appendChild(liItem);
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
            events.publish('clickDeleteChecklistItem', checkID);    // subscribed by library.js
        });

        divControls.appendChild(spanModify);
        divControls.appendChild(spanDelete);

        return divControls;
    }
    const _renderTaskDetails = function(priority, tags, id) {
        let divDetails = div('', '.details');

        let divPriority = div(priority, '.priority');
        let divTags = _renderTags(tags, id);

        divDetails.appendChild(divPriority);
        divDetails.appendChild(divTags);

        return divDetails;
    }
    const _renderTags = function(tagsArray, taskID) {
        let divContainer = div('', '.tags');

        if (tagsArray.length === 0) {
            return divContainer;
        } else {
            for (let t = 0; t < (tagsArray.length); t++) {
                let tagID = `#task_${taskID}__tag_${tagsArray[t]}`;
                let anchorTag = span(tagsArray[t], tagID);

                anchorTag.addEventListener('click', (e) => {
                    console.log(e.target.id);
                });

                divContainer.appendChild(anchorTag);
            };

            return divContainer;
        };
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

    // bind events
    // * modify & delete click events in _renderHeader()'s ^^^
    // * create checklist item event in _renderChecklistDescritionContainer() ^^^
    createTaskButton.addEventListener('click', () => {
        events.publish('clickCreateItem', 'task');  // subscribed by forms.js
    });
    events.subscribe('renderProject', _renderProject)   // published from display.js (_publishRenderDisplayEvents())
    events.subscribe('renderTask', _renderTask);    // published from display.js (_publishRenderDisplayEvents())
    events.subscribe('removeTaskFromDisplay', _deleteTaskCard); // published from library.js (_deleteTask())
    events.subscribe('removeProjectFromDisplay', _clearDisplay) // published from library.js (_deleteProject())
    events.subscribe('itemModified', _updateItem);    // published from library.js (_modifyItems())
    events.subscribe('removeChecklistItemFromDisplay', _deleteChecklistItem)    // published from library.js (_deleteChecklistItem())
    events.subscribe('renderChecklistItem', _renderNewChecklistItem);  // published from display.js (_publishRenderDisplayEvents())
})();