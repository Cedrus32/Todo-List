import library from './library';

// * manages interface between form DOM & library arrays

const forms = (() => {
    // data
    let _currForm;
    let _dataArray = [];

    // cache DOM
    let projForm = document.getElementById('proj-form');
    let taskForm = document.getElementById('task-form');

    let projInputs = projForm.querySelectorAll('input');
    let taskInputs = taskForm.querySelectorAll('input');

    let confirmBtns = document.querySelectorAll('button.confirm');
    let cancelBtns = document.querySelectorAll('button.cancel');

    // bind events
    confirmBtns.forEach(btn => btn.addEventListener('click', () => {
        _confirmInput();
    }));
    cancelBtns.forEach(btn => btn.addEventListener('click', () => {
        _cancelInput();
    }));

    // factories

    // manager methods
    function openCreate(event) {
        _showForm(event.target.classList[0]);
    }
    function openModify(event) {
        console.log('enter openModify()...');
        console.log(event);
        let _dataArray = _queryLibrary(event);
        _fillValues(_dataArray);
        _showForm(event.target.classList[0]);
    }
    function _confirmInput() {
        _hideForm();
        // * push new to library OR modify library item
        _clearValues();

    }
    function _cancelInput() {
        _hideForm();
        _clearValues();
    }

    // helper methods
    function _showForm(formType) {
        if (formType === 'proj') {
            _currForm = projForm;
            projForm.classList.remove('hide');
        } else if (formType === 'task') {
            _currForm = taskForm;
            taskForm.classList.remove('hide');
        };
    }
    function _hideForm() {
        _currForm.classList.add('hide');
    }
    function _queryLibrary(event) {
        console.log('enter _queryLibrary()...');
        let cardID = event.target.closest('div.card').id;
        console.log(cardID);
        let libItems = library.getItem(cardID);
        return libItems;
    }
    function _fillValues(array) {
        console.log(array);

        if (array[0] === 'proj') {
            for (let i = 0; i < (projInputs.length); i++) {
                projInputs[i].value = array[i + 2];
            };
        } else if (array[0] === 'task') {
            for (let i = 0; i < (taskInputs.length); i++) {
                taskInputs[i].value = array[i + 4];
            };
        };
    }
    function _clearValues() {
        if (_currForm === projForm) {
            projInputs.forEach(input => input.value = '');
        } else if (_currForm === taskForm) {
            taskInputs.forEach(input => input.value = '');
        };
        _currForm = '';
    }

    return {
        openCreate, // domDisplay.js (addEvent())
        openModify, // domDisplay.js (addEvent())
    }

})();

export default forms;