import create from './domBase';

// * creates/appends project & task DOM groupings

const domDisplay = (() => {
    // cache DOM
    let projContainer = document.getElementById('proj-container');
    let taskContainer = document.getElementById('task-container');

    // project manager factory
    const genProj = function(project) {
        //// console.log(project.getData());
        //// console.log(project.getDesc());
        let header = projHeader(project.getTitle());
        let description = create.div(project.getDesc(), '.description');

        projContainer.appendChild(header);
        projContainer.appendChild(description);
    }

    // project helper factories
    const projHeader = function(title) {
        let divHeader = create.div('', '.header');

        let h1Title = create.h1(title, '.title');
        let spanModify = create.span('...', '.modify');
        let spanDelete = create.span('X', '.delete');

        divHeader.appendChild(h1Title);
        divHeader.appendChild(spanModify);
        divHeader.appendChild(spanDelete);

        return divHeader;
    }

    // task manager factories
    const genTasks = function(tasks) {
        let taskNum = tasks.length;
        let controls = taskControls(taskNum);
        taskContainer.appendChild(controls);

        for (let t in tasks) {
            let card;
            if (tasks[t].getType() === 'singleton') {
                card = singleton(tasks[t]);
            } else if (tasks[t].getType() === 'checklist') {
                card = checklist(tasks[t]);
            };
            taskContainer.appendChild(card);
        };
    }

    // task helper factories
    const taskControls = function(num) {
        let divControls = create.div('', '.task-controls');

        let tallyContent = 'Tasks (' + num + ')';
        let divTally = create.div(tallyContent, '.tally');
        let divCreate = create.div('+', '.create');

        divControls.appendChild(divTally);
        divControls.appendChild(divCreate);

        return divControls;
    }
    const singleton = function(task) {
        let divCard = create.div('', '.card', '.singleton');

        let inputElem = create.input(task.getID());
        let cardContent = singletonContent(task.getID(), task.getTitle(), task.getDue(), task.getDesc(), task.getPriority(), task.getTags());

        divCard.appendChild(inputElem);
        divCard.appendChild(cardContent);

        return divCard;
    }
    const singletonContent = function(id, title, dueDate, desc, priority, tags) {
        let divContent = create.div('', '.content');

        let header = singletonHeader(id, title, dueDate);
        let description = create.div(desc, '.description');
        let details = taskDetails(priority, tags);

        divContent.appendChild(header);
        divContent.appendChild(description);
        divContent.appendChild(details);

        return divContent;
    }
    const singletonHeader = function(id, title, dueDate) {
        let divHeader = create.div('', '.header');

        let h2Title = create.h2(title, '');
        let labelTitle =create.label('', id, '.title');
        labelTitle.appendChild(h2Title);

        let spanDate = create.span(dueDate, '.date');
        let spanModify = create.span('...', '.modify');
        let spanDelete = create.span('X', '.delete');

        divHeader.appendChild(labelTitle);
        divHeader.appendChild(spanDate);
        divHeader.appendChild(spanModify);
        divHeader.appendChild(spanDelete);

        return divHeader;
    }
    const checklist = function(task) {
        let divCard = create.div('', '.card', '.checklist');

        let header = checklistHeader(task.getTitle(), task.getDue());
        let description = create.div(task.getDesc(), '.description');
        let checks = checklistContent(task.getItems());
        let details = taskDetails(task.getPriority(), task.getTags());

        divCard.appendChild(header);
        divCard.appendChild(description);
        divCard.appendChild(checks);
        divCard.appendChild(details);

        return divCard;
    }
    const checklistHeader = function(title, dueDate) {
        let divHeader = create.div('', '.header');

        let h2Title = create.h2(title, '.title');
        let spanDate = create.span(dueDate, '.date');
        let spanModify = create.span('...', '.modify');
        let spanDelete = create.span('X', '.delete');

        divHeader.appendChild(h2Title);
        divHeader.appendChild(spanDate);
        divHeader.appendChild(spanModify);
        divHeader.appendChild(spanDelete);

        return divHeader;
    }
    const checklistContent = function(items) {
        let itemCount = 1;
        let divChecks = create.div('', '.checks');

        let ul = create.ul('', '');
        for (let i in items) {
            let liItem = create.li('', '');

            let checkbox = create.input(itemCount);
            let label = create.label(items[i], itemCount, '');
            itemCount++;

            liItem.appendChild(checkbox);
            liItem.appendChild(label);

            ul.appendChild(liItem);
        }
        divChecks.appendChild(ul);
        
        return divChecks;
    }
    const taskDetails = function(priority, tags) {
        let divDetails = create.div('', '.details');

        let divPriority = create.div(priority, '.priority');
        let divTags = create.div(tags, '.tags');

        divDetails.appendChild(divPriority);
        divDetails.appendChild(divTags);

        return divDetails;
    }

    // methods
    // function clear {
    //     while (projContainer.lastChild) {
    //         projContainer.remove(projContainer.lastChild);
    //     };

    //     while (taskContainer.lastChild) {
    //         taskContainer.remove(taskContainer.lastChild);
    //     };
    // }

    return {
        genProj,    // genDefault.js ()
        genTasks,   // genDefault.js ()
        // clear,      // ...
    }

})();

export default domDisplay;