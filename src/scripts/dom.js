const dom = (() => {
    // data
    let _attributes = [];
    let element;

    // cache DOM
    let projContainer = document.getElementById('proj-container');
    let taskContainer = document.getElementById('task-container');

    // project manager factory
    const genProj = function(project) {
        //// console.log(project.getData());
        //// console.log(project.getDesc());
        let header = projHeader(project.getTitle());
        let description = _div(project.getDesc(), '.description');

        projContainer.appendChild(header);
        projContainer.appendChild(description);
    }

    // project helper factories
    const projHeader = function(title) {
        let divHeader = _div('', '.header');

        let h1Title = _h1(title, '.title');
        let spanModify = _span('...', '.modify');
        let spanDelete = _span('X', 'delete');

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
            } else if (tasks[t][1] === 'checklist') {
                // generate checklist card
                // let card = checklist();
            };
            taskContainer.appendChild(card);
        };
    }

    // task helper factories
    const taskControls = function(num) {
        let divControls = _div('', '.task-controls');

        let tallyContent = 'Tasks (' + num + ')';
        let divTally = _div(tallyContent, '.tally');
        let divCreate = _div('+', '.create');

        divControls.appendChild(divTally);
        divControls.appendChild(divCreate);

        return divControls;
    }
    const singleton = function(task) {
        let divCard = _div('', '.card', '.singleton');

        let inputElem = _input(task.getID());
        let cardContent = singletonContent(task.getID(), task.getTitle(), task.getDue(), task.getDesc(), task.getPriority(), task.getTags());

        divCard.appendChild(inputElem);
        divCard.appendChild(cardContent);

        return divCard;
    }
    const singletonContent = function(id, title, dueDate, desc, priority, tags) {
        let divContent = _div('', '.content');

        let header = singletonHeader(id, title, dueDate);
        let description = _div(desc, '.description');
        let details = taskDetails(priority, tags);

        divContent.appendChild(header);
        divContent.appendChild(description);
        divContent.appendChild(details);

        return divContent;
    }
    const singletonHeader = function(id, title, dueDate) {
        let divHeader = _div('', '.header');

        let titleH2 = _h2(title, '');
        let labelTitle = _label(id, titleH2);
        labelTitle.appendChild(titleH2);

        let spanDate = _span(dueDate, '.date');
        let spanModify = _span('...', '.modify');
        let spanDelete = _span('X', '.delete');

        divHeader.appendChild(labelTitle);
        divHeader.appendChild(spanDate);
        divHeader.appendChild(spanModify);
        divHeader.appendChild(spanDelete);

        return divHeader;
    }
    // const checklist = function() {
    //     let divCard = _dic('', '.card', '.checklist');

    //     let header = checklistHeader();
    //     let description = _div(task.getDesc(), '.description');
    //     let checks = checklist

    //     return divCard;
    // }
    // const checklistContent = function() {

    // }
    // const checklistHeader = function() {

    // }
    const taskDetails = function(priority, tags) {
        let divDetails = _div('', '.details');

        let divPriority = _div(priority, '.priority');
        let divTags = _div(tags, '.tags');

        divDetails.appendChild(divPriority);
        divDetails.appendChild(divTags);

        return divDetails;
    }

    // basic helper factories
    const _div = function(content, ...args) {
        _attributes = [...args];
        element = document.createElement('div');
        if (_attributes.length > 0) {
            _setAtts(element, _attributes);
        };
        element.textContent = content;
        _attributes = [];
        return element;
    }
    const _span = function(content, ...args) {
        _attributes = [...args];
        element = document.createElement('span');
        if (_attributes.length > 0) {
            _setAtts(element, _attributes);
        };
        element.textContent = content;
        _attributes = [];
        return element;
    }
    const _h1 = function(content, ...args) {
        _attributes = [...args];
        element = document.createElement('h1');
        if (_attributes.length > 0) {
            _setAtts(element, _attributes);
        };
        element.textContent = content;
        _attributes = [];
        return element;
    }
    const _h2 = function(content, ...args) {
        _attributes = [...args];
        element = document.createElement('h2');
        if (_attributes.length > 0) {
            _setAtts(element, _attributes);
        };
        element.textContent = content;
        _attributes = [];
        return element;
    }
    const _input = function(id) {
        element = document.createElement('input');
        element.type = 'checkbox';
        element.id = String(id);
        element.name = String(id);
        console.log({element});
        return element;
    }
    const _label = function(id) {
        element = document.createElement('label');
        element.for = String(id);
        element.classList = 'title';
        console.log({element});
        return element;
    }
    // const _ul = function(...args) {
    //     _attributes = [...args];
    //     element = document.createElement('ul');
    //     if (_attributes.length > 0) {
    //         _setAtts(element, _attributes);
    //     };
    //     _clearData();
    //     return element;
    // }
    // const _li = function(...args) {
    //     _attributes = [...args];
    //     element = document.createElement('li');
    //     if (_attributes.length > 0) {
    //         _setAtts(element, _attributes);
    //     };
    //     _clearData();
    //     return element;
    // }
    // const _a = function(...args) {
    //     _attributes = [...args];
    //     element = document.createElement('a');
    //     if (_attributes.length > 0) {
    //         _setAtts(element, _attributes);
    //     };
    //     _attributes = [];
    //     return element;
    // }

    // helpers
    function _setAtts(element, attributes) {
        for (let i in attributes) {
            if (attributes[i][0] === '.') {
                element.classList.add(attributes[i].substring(1, attributes[i].length));
            } else if (attributes[i][0] === '#') {
                element.id = attributes[i].substring(1, attributes[i].length);
            };
        };
    }

    return {
        genProj,  // genDefault.js (_genDefDisplay())
        genTasks,  // genDefault.js (_genDefDisplay())
    }

})();

export default dom;