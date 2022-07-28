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

        // _fillTaskCounter('');
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

        // _fillTaskCounter('+');
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
        let checklistContent = _renderChecklistContent(item.items);
        let checklistDetails = _renderTaskDetails(item.priority, item.tags);

        targetCard.appendChild(checklistHeader);
        targetCard.appendChild(checklistDescription);
        targetCard.appendChild(checklistContent);
        targetCard.appendChild(checklistDetails);
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
            console.log(cardID);
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
        spanDelete.addEventListener('click', (e) => {    // subscribed by library.js
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
    const _renderChecklistContent = function(items) {
        let itemCount = 1;
        let divChecks = div('', '.checks');

        let ulItem = ul('', '');
        if (items === undefined) {
            console.log('create blank checklist');
            let checklistItem = _renderChecklistItem('', itemCount);    // todo: consider how to make checkmark id's unique
                                                                        // ? pass taskID -> convert to taskID_input_itemCount && taskID_check_itemCount
            ulItem.appendChild(checklistItem);
        } else {
            for (let i = 0; i < (items.length); i++) {
                let checklistItem = _renderChecklistItem(items[i], itemCount);  // todo: consider how to make checkmark id's unique
                ulItem.appendChild(checklistItem);                              // ? pass taskID -> convert to taskID_input_itemCount && taskID_check_itemCount
                itemCount++;
            };
        };
        divChecks.appendChild(ulItem);
        
        return divChecks;
    }
    const _renderChecklistItem = function(content, count) {
        let liItem = li('', '');
    
        let checkbox = input(count);    // todo: see above
        let labelItem = label(content, count, '');  // todo: see above
        // let itemControls = _renderChecklistItemControls();

        liItem.appendChild(checkbox);
        liItem.appendChild(labelItem);
        // liItem.appendChild(itemControls);

        return liItem;
    }
    // const _renderChecklistItemControls = function() {
    //     let divControls = div('', '.checklist-item-controls');

    //     let spanModify = span('...', '.task', '.modify');
    //     let spanDelete = span('X', '.delete');

    //     // * checklist item modify/delete events
    //     spanModify.addEventListener('click', (e) => {
    //         console.log('call alert() to modify');
    //     });
    //     spanDelete.addEventListener('click', (e) => {
    //         // ? get position in ul nodelist, push with event to library, index into items using the same index
    //         let liID = e.target.closest('li').id;
    //         events.publish('deleteTask', liID);
    //     });

    //     divControls.appendChild(spanModify);
    //     divControls.appendChild(spanDelete);
    // }
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
        console.log(itemInstance);
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
        };
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
    function _deleteProjectCard(id) {
        let targetProject = document.getElementById(id);
        projectContainer.removeChild(targetProject);
    }
    function _deleteTaskCard(id) {
        let targetTask = document.getElementById(id);
        taskContainer.removeChild(targetTask)
        _fillTaskCounter('-');
    }
    function _deleteItemContent(id) {
        let targetProject = document.getElementById(id);
        while (targetProject.children.length > 0) {
            targetProject.removeChild(targetProject.lastChild);
        };
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
})();