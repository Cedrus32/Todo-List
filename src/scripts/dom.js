const dom = (() => {
    // data
    let _attributes = [];
    let element;

    // cache DOM
    let display = document.getElementById('display');

    // project manager factory
    const projContainer = function(project) {
        //// console.log(project.getData());
        //// console.log(project.getDesc());
        let divContainer = _div('', '.proj', '.container');

        let header = projHeader(project.getTitle());
        let description = _div(project.getDesc(), '.description');

        divContainer.appendChild(header);
        divContainer.appendChild(description);

        display.appendChild(divContainer);
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
    const taskCard = function(task) {
        //// console.log(task.getData());
        //// console.log(task.getDesc());
        let card = _div(task.getDesc(), '');
        display.appendChild(card);
    }

    // task helper factories

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
    // const _nav = function(content, ...args) {
    //     _content = content;
    //     _attributes = [...args];
    //     element = document.createElement('nav');
    //     if (_attributes.length > 0) {
    //         _setAtts(element, _attributes);
    //     };
    //     _clearData();
    //     return element;
    // }
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
    // const _img = function(...args) {
    //     _attributes = [...args];
    //     element = document.createElement('img');
    //     if (_attributes.length > 0) {
    //         _setAtts(element, _attributes);
    //     };
    //     _attributes = [];
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
    // const _h2 = function(...args) {
    //     _attributes = [...args];
    //     element = document.createElement('h2');
    //     if (_attributes.length > 0) {
    //         _setAtts(element, _attributes);
    //     };
    //     _attributes = [];
    //     return element;
    // }
    // const _h3 = function(...args) {
    //     _attributes = [...args];
    //     element = document.createElement('h3');
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
        projContainer,  // genDefault.js (_genDefDisplay())
    }

})();

export default dom;