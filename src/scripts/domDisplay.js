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
        //// console.log(project.getData());
        //// console.log(project.getDesc());
        let cardID = '#project' + project.id;
        let projectCard = div('', '.card', '.project', cardID);

        let projectHeader = _renderProjectHeader(project.title);
        let projectDescription = div(project.description, '.description');

        projectCard.appendChild(projectHeader);
        projectCard.appendChild(projectDescription);

        projectContainer.appendChild(projectCard);

        _renderTaskCounterContent();
    }

    // task manager
    const _renderTask = function(task) {
        let taskCard;
        if (task.type === 'singleton') {
            taskCard = _renderSingleton(task);
        } else if (task.type === 'checklist') {
            taskCard = _renderChecklist(task);
        }
        taskContainer.appendChild(taskCard);
        _renderTaskCounterContent();
    }
    const _renderSingleton = function(task) {
        let cardID = '#task' + task.id;
        let divCard = div('', '.card', '.singleton', cardID);

        let singletonCheckmark = input(task.id);
        let taskCardContent = _renderSingletonContent(task.id, task.title, task.dueDate, task.description, task.priority, task.tags);

        divCard.appendChild(singletonCheckmark);
        divCard.appendChild(taskCardContent);

        return divCard;
    }
    const _renderChecklist = function(task) {
        let cardID = '#task' + task.id;
        let divCard = div('', '.card', '.checklist', cardID);

        let checklistHeader = _renderChecklistHeader(task.title, task.dueDate);
        let checklistDescription = div(task.description, '.description');
        let checklistContent = _renderChecklistContent(task.items);
        let checklistDetails = _renderTaskDetails(task.priority, task.tags);

        divCard.appendChild(checklistHeader);
        divCard.appendChild(checklistDescription);
        divCard.appendChild(checklistContent);
        divCard.appendChild(checklistDetails);

        return divCard;
    }

    // helper factories
    const _renderSingletonContent = function(id, title, dueDate, description, priority, tags) {
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

        liItem.appendChild(checkbox);
        liItem.appendChild(labelItem);

        return liItem;
    }
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
            let cardID = e.target.closest('div.card').id;
            events.publish('deleteTask', cardID);   // subscribed by library.js
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
    const _renderTaskDetails = function(priority, tags) {
        let divDetails = div('', '.details');

        let divPriority = div(priority, '.priority');
        let divTags = div(tags, '.tags');

        divDetails.appendChild(divPriority);
        divDetails.appendChild(divTags);

        return divDetails;
    }

    // methods
    function _renderTaskCounterContent() {
        taskCountSpan.textContent = _taskCounter;
        _taskCounter++;
    }
    function _clearDisplay() {
        // ! also unsubscribe events when clearing DOM
        // while (projContainer.lastChild) {
        //     // * remove any eventListeners from objects
        //     projContainer.remove(projContainer.lastChild);
        // };

        // // * change criteria -- KEEP LAST CHILD (task controls)
        // while (taskContainer.lastChild) {
        //     taskContainer.remove(taskContainer.lastChild);
        // };
        // // * adjust taskCounter, call renderTaskCounterContent
        // // * unsubscribe from onEmit
    }

    // bind events
    // * modify & delete click events in _renderHeader()'s ^^^
    createTaskButton.addEventListener('click', () => {
        events.publish('clickCreateItem', 'task');      // subscribed by forms.js
    });
    events.subscribe('renderProject', _renderProject)   // published from display.js (_renderDisplay())
    events.subscribe('renderTask', _renderTask);        // published from display.js (_renderDisplay())

})();