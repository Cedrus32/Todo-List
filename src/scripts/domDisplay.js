// import create from './domBase';
import { default as div, h1, h2, ul, li, span, input, label} from './elements';
import forms from './forms';

// * factory class for display DOM groupings

const domDisplay = (() => {
    // cache DOM
    let projContainer = document.getElementById('proj-container');
    let taskContainer = document.getElementById('task-container');

    // project manager factory
    const renderProject = function(project) {
        //// console.log(project.getData());
        //// console.log(project.getDesc());
        let cardID = '#proj' + project.id;
        let card = div('', '.card', '.project', cardID);

        let header = projHeader(project.title);
        let description = div(project.description, '.description');

        card.appendChild(header);
        card.appendChild(description);

        projContainer.appendChild(card);
    }

    // project helper factories
    const projHeader = function(title) {
        let divHeader = div('', '.header');

        let h1Title = h1(title, '.title');
        let spanModify = span('...', '.proj', '.modify');
        let spanDelete = span('X', '.delete');

        divHeader.appendChild(h1Title);
        divHeader.appendChild(spanModify);
        divHeader.appendChild(spanDelete);

        return divHeader;
    }

    // task manager factories
    const renderTask = function(task) {
        // ! implement outside getTasks
        // let taskNum = tasks.length;
        // let controls = taskControls(taskNum);
        // taskContainer.appendChild(controls);

        console.log('enter renderTask');
        console.log(task);
        let card;
        if (task.type === 'singleton') {
            console.log('confirmed: type singleton');
            card = singleton(task);
        } else if (task.type === 'checklist') {
            console.log('confirmed: type checklist');
            card = checklist(task);
        }
        taskContainer.appendChild(card);
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
    const singleton = function(task) {
        console.log('enter singletion()');
        let cardID = '#task' + task.id;
        let divCard = div('', '.card', '.singleton', cardID);

        let inputElem = input(task.id);
        let cardContent = singletonContent(task.id, task.title, task.dueDate, task.description, task.priority, task.tags);

        divCard.appendChild(inputElem);
        divCard.appendChild(cardContent);

        return divCard;
    }
    const singletonContent = function(id, title, dueDate, desc, priority, tags) {
        let divContent = div('', '.content');

        let header = singletonHeader(id, title, dueDate);
        let description = div(desc, '.description');
        let details = taskDetails(priority, tags);

        divContent.appendChild(header);
        divContent.appendChild(description);
        divContent.appendChild(details);

        return divContent;
    }
    const singletonHeader = function(id, title, dueDate) {
        let divHeader = div('', '.header');

        let h2Title = h2(title, '');
        let labelTitle = label('', id, '.title');
        labelTitle.appendChild(h2Title);

        let spanDate = span(dueDate, '.date');
        let spanModify = span('...', '.task', '.modify');
        let spanDelete = span('X', '.delete');

        divHeader.appendChild(labelTitle);
        divHeader.appendChild(spanDate);
        divHeader.appendChild(spanModify);
        divHeader.appendChild(spanDelete);

        return divHeader;
    }
    const checklist = function(task) {
        let cardID = '#task' + task.id;
        let divCard = div('', '.card', '.checklist', cardID);

        let header = checklistHeader(task.title, task.dueDate);
        let description = div(task.description, '.description');
        let checks = checklistContent(task.items);
        let details = taskDetails(task.priority, task.tags);

        divCard.appendChild(header);
        divCard.appendChild(description);
        divCard.appendChild(checks);
        divCard.appendChild(details);

        return divCard;
    }
    const checklistHeader = function(title, dueDate) {
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
    const checklistContent = function(items) {
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
    const taskDetails = function(priority, tags) {
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

    return {
        renderProject,  // genDefault.js (initDefault())
        renderTask,     // genDefault.js (initDefault())
        assignEvents,   // display.js (initDefault())
        // clear,          // ...
    }

})();

export default domDisplay;