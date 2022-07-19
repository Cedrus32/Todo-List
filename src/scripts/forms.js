import library from './library';

// * manages interface between form DOM & library arrays

const forms = (() => {
    // data
    let _currForm;
    let _dataArray = [];

    // cache DOM
    let projForm = document.getElementById('proj-form');
    let projInputs = projForm.querySelectorAll('input');
    let taskForm = document.getElementById('task-form');
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
    function openCreate(formType) {
        _showForm(formType);
    }
    function openModify(formType) {
        // * query library: get card id -> scrub for object ID -> get object form library
        let _dataArray = _queryLibrary();
        _fillValues(_dataArray);
        // ? _dataArray = [];
        
        // * populate fields
        _showForm(formType);
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
    function _queryLibrary() {
        // * get relevant card
        // * scrub card id for library reference
        // * call library functions to get object
        // * populate into array (like in display.js)
        // * return array
    }
    function _fillValues() {
        // * conditional to populate correct form
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