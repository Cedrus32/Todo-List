import library from './library';

// * manages interface between form DOM & library arrays

const forms = (() => {
    // data
    let _currentForm;

    // cache DOM
    let projForm = document.getElementById('proj-form');
    let taskForm = document.getElementById('task-form');
    let confirmBtns = document.querySelectorAll('button.confirm');
    let cancelBtns = document.querySelectorAll('button.cancel');

    // bind events
    // confirmBtns.forEach(btn => btn.addEventListener('click', () => {
    //     // call _confirmInput();
    // }));
    cancelBtns.forEach(btn => btn.addEventListener('click', () => {
        _cancelInput();
    }));

    // factories

    // manager methods
    function openCreate(formType) {
        _showForm(formType);
    }
    function openModify(formType) {
        // query library
        // populate fields
        _showForm(formType);
    }
    function _confirmInput() {
        _hideForm();
        // push new to library OR modify library item
        // clear input values

    }
    function _cancelInput() {
        _hideForm();
        // clear input values
    }

    // helper methods
    function _showForm(formType) {
        if (formType === 'proj') {
            _currentForm = projForm;
            projForm.classList.remove('hide');
        } else if (formType === 'task') {
            _currentForm = taskForm;
            taskForm.classList.remove('hide');
        };
    }
    function _hideForm() {
        _currentForm.classList.add('hide');
        _currentForm = '';
    }

    return {
        openCreate, // domDisplay.js (addEvent())
        openModify, // domDisplay.js (addEvent())
    }

})();

export default forms;