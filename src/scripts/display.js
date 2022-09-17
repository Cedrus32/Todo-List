import events from '../events';
import { default as div, h2, h4, ul, li, span, input, label, img } from './elements';

// & manages display DOM <-> library communication
// & contains factories for generating display section DOM elements / groupings

const display = (() => {
    // data
    let _taskCounter = 0;

    // cache DOM
    let mainContainer = document.querySelector('main');
    let projectContainer = document.getElementById('project-container');
    let taskContainer = document.getElementById('task-container');
    let taskCountSpan = document.querySelector('h3.tally span');

    // * create task listener in _renderTaskCreateButton()
    // * modify & delete click listeners in _render...Header()
    // * create checklist item listener in _renderChecklistDescritionContainer()

    // bind events
    window.addEventListener('resize', () => {
        events.publish('windowResize', window.innerWidth);  // subscribed by sidebar.js, display.js
    });

    // display manager
    function _setLayout(width) {
        mainContainer.classList = '';
        switch (true) {
            case (width < 600):
                mainContainer.classList.add('compact-view');
                break;
            case (width >= 600):
                mainContainer.classList.add('full-view');
        };
    }
    function _updateDisplay(instanceBundle) {
        let viewPreference = instanceBundle[0];
        let viewPreferenceHeaderCard;

        switch (viewPreference) {   // ! reduce repetition
            case 'project':
                for (let i = 1; i < (instanceBundle.length); i++) {
                    switch (i) {
                        case 1:
                            let projectInstance = instanceBundle[i];
                            _renderProject(projectInstance);
                            break;
                        default:
                            _renderTask(instanceBundle[i]);
                    };
                };
                break;
            default:
                _clearDisplay();
                viewPreferenceHeaderCard = _renderViewPreferenceHeaderCard(instanceBundle[0]);
                projectContainer.appendChild(viewPreferenceHeaderCard);
                for (let i = 1; i < (instanceBundle.length); i++) {
                    _renderTask(instanceBundle[i]);
                };
        };
    }
    function _updateItem(itemInstance) {
        let cardID;
        let card;

        switch(true) {
            case (itemInstance.type === 'project'):
                cardID = `project_${itemInstance.id}`;
                card = document.getElementById(cardID);

                let projectValues = [itemInstance.title, itemInstance.description]
                for (let i = 0; i < (projectValues.length); i++) {
                    switch(i) {
                        case 0:
                            let title = card.querySelector('.title');
                            title.textContent = projectValues[0];
                            break;
                        case 1:
                            let description = card.querySelector('.description');
                            description.textContent = projectValues[1];
                    };
                };
                break;
            case (itemInstance.type === 'singleton' || itemInstance.type === 'checklist'):
                cardID = `task_${itemInstance.id}`;
                card = document.getElementById(cardID);
    
                let taskValues = [itemInstance.title, itemInstance.description, itemInstance.dueDate, itemInstance.priority, itemInstance.projectID];
                for (let i = 0; i < (taskValues.length); i++) {
                    switch(i) {
                        case 0:
                            let title;
                            switch (itemInstance.type) {
                                case 'singleton':
                                    title = card.querySelector('.title label');
                                    break;
                                case 'checklist':
                                    title = card.querySelector('.title');
                            };
                            title.textContent = taskValues[0];
                            break;
                        case 1:
                            let description = card.querySelector('.description');
                            description.textContent = taskValues[1];
                            break;
                        case 2:
                            let dueDate = card.querySelector('.date');
                            dueDate.textContent = taskValues[2];
                            break;
                        case 3:
                            let priority = card.querySelector('.priority');
                            priority.src = `../src/icons/priority-${taskValues[3]}.svg`;
                            break;
                        case 4:
                            let currentProjectCardID = projectContainer.querySelector('.card').id;
                            let currentProjectReference = currentProjectCardID.split('_')[1];
                            if (currentProjectReference !== undefined && taskValues[4] != currentProjectReference) {
                                _deleteTaskCard(cardID);
                            };
                    };
                };
                break;
            case (itemInstance[0] === 'checkbox'):  // itemInstance bundled manually in library.js
                let taskReference = itemInstance[1];
                let checkID = itemInstance[2];
                let labelContent = itemInstance[3];
    
                cardID = `task_${taskReference}__li_${checkID}`;
                card = document.getElementById(cardID);
    
                let checkLabel = card.querySelector('label');
                checkLabel.textContent = labelContent;
        };
    }

    // display helpers
    function _clearDisplay() {
        while (projectContainer.children.length > 0) {
            projectContainer.removeChild(projectContainer.lastChild);
        };
        while (taskContainer.children.length > 1) {
            taskContainer.removeChild(taskContainer.lastChild);
            _fillTaskCounter('-');
        };
        _removeTaskCreateButton();
    }
    function _deleteTaskCard(id) {
        let targetTask = document.getElementById(id);
        taskContainer.removeChild(targetTask)
        _fillTaskCounter('-');
    }
    function _deleteChecklistItem(id) {
        let liContainer = document.querySelector(`li#${id}`);
        let ulContainer = liContainer.parentElement;
        ulContainer.removeChild(liContainer);
    }
    function _fillTaskCounter(operator) {
        switch (operator) {
            case '+':
                _taskCounter++;
                break;
            case '-':
                _taskCounter--;
        };
        
        taskCountSpan.textContent = _taskCounter;
    }
    
    // project factories
    const _renderProject = function(project) {
        if (projectContainer.children) {
            _clearDisplay();
        };

        let projectCard = _renderProjectCard(project.description, project.id, project.title);
        projectContainer.appendChild(projectCard);

        _renderTaskCreateButton();

        _fillTaskCounter('');
    }
    const _renderProjectCard = function(description, id, title) {
        let cardID = `#project_${id}`;
        let divCard = div('', '.card', '.project', cardID);

        let h2Title = h2(title, '.title');
        let projectDescription = div(description, '.description');
        divCard.append(h2Title, projectDescription);
        if (id !== 0) {
            let divProjectControls = div('', '.project-controls');

            let imgModify = img('src/icons/edit.svg', 'modify project', '.project', '.modify');
            // * project modify/delete events
            imgModify.addEventListener('click', (e) => {
                events.publish('clickModifyItem', e);   // subscribed by forms.js
            });

            let imgDelete = img('src/icons/delete.svg', 'delete project', '.delete');
            imgDelete.addEventListener('click', (e) => {
                let cardID = e.target.closest('div.card').id;
                events.publish('clickDeleteProject', cardID);   // subscribed by forms.js
            });

            divProjectControls.append(imgModify, imgDelete);
            divCard.appendChild(divProjectControls);
        };
        
        return divCard;
    }
    const _renderViewPreferenceHeaderCard = function(title) {
        let viewCard = div('', '.card', '.preference-header');
        let viewHeader = h2(title, '');
        viewCard.appendChild(viewHeader);

        return viewCard;
    }

    // task factories
    const _renderTaskCreateButton = function() {
        let divCreate = div('+', '.create');

        divCreate.addEventListener('click', () => {
            events.publish('clickCreateItem', 'task');  // subscribed by forms.js
        });

        let taskControls = taskContainer.children[0];
        taskControls.append(divCreate);
    }
    const _removeTaskCreateButton = function() {
        let taskControls = taskContainer.children[0];
        let controlsLength = taskControls.children.length;
        let lastControl = taskControls.children[controlsLength - 1];

        if (lastControl.classList.contains('create')) {
            taskControls.removeChild(lastControl);
        };
    }
    const _renderTask = function(task) {
        console.log(task);
        let cardID = 'task_' + task.id;
        let taskCard;

        switch (task.type) {
            case 'singleton':
                taskCard = div('', '.card', '.singleton', `#${cardID}`)
                let singletonCheckmark = input('checkbox', '', '', task.id, '');
                let singletonCardContent = _renderCardContent(task.type, task.id, task.title, task.dueDate, task.description, task.priority);
                taskCard.append(singletonCheckmark, singletonCardContent);
                break;
            case 'checklist':
                taskCard = div('', '.card', '.checklist', `#${cardID}`, `.priority-${task.priority}`); // ! move .priority-${}
                let checklistCardContent = _renderCardContent(task.type, '', task.title, task.dueDate, task.description, task.priority);
                let checklistItems = _renderCheckboxContainer(cardID, task.items);
                taskCard.append(checklistCardContent, checklistItems);
        };

        taskContainer.appendChild(taskCard);

        _fillTaskCounter('+');
    }
    const _renderCardContent = function(type, id, title, dueDate, description, priority) {
        let divContent = div('', '.content');

        let taskTitle = h4('', '.title');
        switch (type) {
            case 'singleton':
                let labelCheckmarkTitle = label(title, id, '');
                taskTitle.appendChild(labelCheckmarkTitle);
                break;
            case 'checklist':
                taskTitle.textContent = title;
        };

        let spanDate = span(dueDate, '.date');

        let imgAlt;
        switch (priority) {
            case 0:
                imgAlt = 'no priority';
                break;
            case 1:
                imgAlt = 'low priority';
                break;
            case 2:
                imgAlt = 'medium priority';
                break;
            case 3:
                imgAlt = 'high priority';
        }
        let imgPriority = img(`src/icons/priority-${priority}.svg`, imgAlt, '.priority');

        let imgModify = img('src/icons/edit.svg', 'modify task', '.task', '.modify');
        let imgDelete = img('src/icons/delete.svg', 'delete task', '.delete');

        // * task modify/delete events
        imgModify.addEventListener('click', (e) => {
            events.publish('clickModifyItem', e);   // subscribed by forms.js
        });
        imgDelete.addEventListener('click', (e) => {    // subscribed by library.js
            let taskCardID = e.target.closest('div.card').id;
            events.publish('clickDeleteTask', taskCardID);   // subscribed by library.js
        });

        let taskDescription = div(description, '.description');

        divContent.append(taskTitle, spanDate, imgPriority, imgModify, imgDelete, taskDescription);

        if (type === 'checklist') {
            let divCreate = div('+', '.create');
            divCreate.addEventListener('click', (e) => {
                let taskReference = e.target.closest('div.card').id.split('_')[1];
                let formReferences = ['checkbox', taskReference];
                events.publish('clickCreateItem', formReferences); // subscribed by forms.js
            });
            divContent.appendChild(divCreate);
        };
        
        return divContent;
    }
    const _renderCheckboxContainer = function(taskCardID, items) {
        let ulItem = ul('', '.checkboxes');

        for (let i = 0; i < (items.length); i++) {
            _renderCheckbox(ulItem, taskCardID, items[i]);
        };
        
        return ulItem;
    }
    const _renderCheckbox = function(checklistContainer, taskCardID, checkInfo) {
        let checkID = checkInfo[0];
        let checkContent = checkInfo[1];

        let liCardID = `#${taskCardID}__li_${checkID}`;
        let liCard = li('', '.card', liCardID);

        let checkboxID = `${taskCardID}__checkbox_${checkID}`;  // # not needed vv
        let checkbox = input('checkbox', '', '', checkboxID, '');  // sets ID directly via default object prototype methods
        
        let labelCheckbox = label(checkContent, checkboxID, '');

        let imgModify = img('src/icons/edit.svg', 'modify task', '.task', '.modify');
        let imgDelete = img('src/icons/delete.svg', 'delete task', '.delete');

        // * checklist item modify/delete events
        imgModify.addEventListener('click', (e) => {
            events.publish('clickModifyItem', e);    // subscribed by forms.js
        });
        imgDelete.addEventListener('click', (e) => {
            events.publish('clickDeleteChecklistItem', e);    // subscribed by library.js
        });

        liCard.append(checkbox, labelCheckbox, imgModify, imgDelete);
        checklistContainer.appendChild(liCard);
    }
    const _renderNewCheckbox = function(checklistInstance) {
        let taskReference = checklistInstance[1]
        let taskCardID = `task_${taskReference}`;
        let ulTarget = document.querySelector(`div#${taskCardID} ul`);

        let checkReference = checklistInstance[2];
        let checkContent = checklistInstance[3];

        _renderCheckbox(ulTarget, taskCardID, [checkReference, checkContent]);
    }



    // event subscriptions

    events.subscribe('updateDisplayView', _updateDisplay);  // published from library.js (_bundleInstances())

    events.subscribe('projectCreated', _renderProject)   // published from library.js (_createProject())
    events.subscribe('taskCreated', _renderTask);    // published from library.js (_createTask())
    events.subscribe('checkboxCreated', _renderNewCheckbox);   // published from library.js (_createCheckbox())

    events.subscribe('itemModified', _updateItem);    // published from library.js (_modify...())

    events.subscribe('removeProjectFromSection', _clearDisplay) // published from library.js (_deleteProject())
    events.subscribe('removeTaskFromDisplay', _deleteTaskCard); // published from library.js (_deleteTask())
    events.subscribe('removeChecklistItemFromDisplay', _deleteChecklistItem)    // published from library.js (_deleteChecklistItem())

    events.subscribe('initializeDefaultLayout', _setLayout);    // published by default.js
    events.subscribe('windowResize', _setLayout);   // published by default.js
})();

export default display;