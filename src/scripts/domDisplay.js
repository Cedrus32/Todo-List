// import create from './domBase';
import { default as div, h1, h2, ul, li, span, input, label} from './elements';
import events from '../events';
// import forms from './forms';

// * factory class for display DOM groupings

const domDisplay = (() => {
    // cache DOM
    let projectContainer = document.getElementById('proj-container');
    let taskContainer = document.getElementById('task-container');

    // project manager factory
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
    }

    // task manager factories
    const _renderTask = function(task) {
        // ! implement outside getTasks
        // let taskNum = tasks.length;
        // let controls = taskControls(taskNum);
        // taskContainer.appendChild(controls);

        console.log('enter renderTask');
        console.log(task);
        let taskCard;
        if (task.type === 'singleton') {
            console.log('confirmed: type singleton');
            taskCard = _renderSingleton(task);
        } else if (task.type === 'checklist') {
            console.log('confirmed: type checklist');
            taskCard = _renderChecklist(task);
        }
        taskContainer.appendChild(taskCard);
    }
    const _renderSingleton = function(task) {
        console.log('enter singletion()');
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

    // task helper factories
    const taskControls = function(num) {
        let divControls = div('', '.task-controls');

        let tallyContent = 'Tasks (' + num + ')';
        let divTally = div(tallyContent, '.tally');
        let divCreate = div('+', '.task', '.create');

        divControls.appendChild(divTally);
        divControls.appendChild(divCreate);

        return divControls;
    }
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
        for (let i in items) {
            let liItem = li('', '');

            let checkbox = input(itemCount);
            let labelItem = label(items[i], itemCount, '');
            itemCount++;

            liItem.appendChild(checkbox);
            liItem.appendChild(labelItem);

            ulItem.appendChild(liItem);
        }
        divChecks.appendChild(ulItem);
        
        return divChecks;
    }
    const _renderProjectHeader = function(title) {
        let divHeader = div('', '.header');

        let h1Title = h1(title, '.title');
        let spanModify = span('...', '.proj', '.modify');
        let spanDelete = span('X', '.delete');

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
    function assignEvents() {
        let modBtns = document.querySelectorAll('span.modify');
        modBtns.forEach(btn => btn.addEventListener('click', (e) => {
            forms.openModify(e);
        }));
        let createBtns = document.querySelectorAll('div.create');
        createBtns.forEach(btn => btn.addEventListener('click', (e) => {
            forms.openCreate(e);
        }));
    };
    // function clear {
    //  // ! unsubscript from onEmit
    //     while (projContainer.lastChild) {
    //         projContainer.remove(projContainer.lastChild);
    //     };

    //     while (taskContainer.lastChild) {
    //         taskContainer.remove(taskContainer.lastChild);
    //     };
    // }

    // bind events
    events.subscribe('renderProject', _renderProject)
    events.subscribe('renderTask', _renderTask);

})();