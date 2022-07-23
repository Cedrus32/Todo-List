import events from '../events';
import library from './library';

// * manages interface between form DOM & library arrays

const forms = (() => {
    // data
    let _currentForm;

    // cache DOM
    let projectForm = document.getElementById('proj-form');
    let taskForm = document.getElementById('task-form');

    let projectInputs = projectForm.querySelectorAll('input');
    let taskInputs = taskForm.querySelectorAll('.input');

    let confirmButtons = document.querySelectorAll('button.confirm');
    let cancelButtons = document.querySelectorAll('button.cancel');

    // getters
    function getProjDropdown() {
        return taskInputs[4];
    }

    // manager methods
    function _openCreateForm(formType) {
        _showForm(formType);
    }
    function _openModifyQuery(event) {
        let cardID = event.target.closest('div.card').id;
        events.publish('openModifyQuery', cardID);  // subscribed by library.js
    }
    function _openModifyForm(formType, itemValues) {
        _fillFormValues(formType, itemValues);
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
        if (formType === 'project') {
            _currentForm = projectForm;
            projectForm.classList.remove('hide');
        } else if (formType === 'task') {
            _currentForm = taskForm;
            // * populate project options

            taskForm.classList.remove('hide');
        };
    }
    function _hideForm() {
        _currentForm.classList.add('hide');
    }
    function _fillFormValues(formType, values) {
        console.log(values);
        if (formType === 'project') {
            for (let i = 0; i < (projectInputs.length); i++) {
                projectInputs[i].value = values[i];
            };
        } else if (formType === 'task') {
            for (let i = 0; i < (taskInputs.length); i++) {
                taskInputs[i].value = values[i];
            };
        };
    }
    function _clearValues() {
        if (_currentForm === projectForm) {
            projectInputs.forEach(input => input.value = '');
        } else if (_currentForm === taskForm) {
            taskInputs.forEach(input => input.value = '');
        };
        _currentForm = '';
    }

    // bind events
    confirmButtons.forEach(btn => btn.addEventListener('click', () => {
        _confirmInput();
    }));
    cancelButtons.forEach(btn => btn.addEventListener('click', () => {
        _cancelInput();
    }));
    events.subscribe('clickCreateItem', _openCreateForm);   // publishing from domDisplay.js (createTaskButton clickEvent)
    events.subscribe('clickModifyItem', _openModifyQuery);  // publishing from domDisplay.js (_renderHeaders())
    events.subscribe('closeModifyQuery', _openModifyForm);  // publishing from library.js (_queryItem());

    return {
        getProjDropdown,    // genDynamic.js (genProjOptions())
    }

})();

export default forms;