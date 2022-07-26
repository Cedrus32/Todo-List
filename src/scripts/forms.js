import events from '../events';
import { option } from './elements';

// * manages interface between form DOM & library arrays

const forms = (() => {
    // data
    let _currentForm;

    // cache DOM
    let projectForm = document.getElementById('project-form');
    let taskForm = document.getElementById('task-form');

    let projectInputs = projectForm.querySelectorAll('input');
    let taskInputs = taskForm.querySelectorAll('.input');

    let confirmButtons = document.querySelectorAll('button.confirm');
    let cancelButtons = document.querySelectorAll('button.cancel');

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
    function _confirmModify() {
        _hideForm();
        let formValues = _bundleFormValues();
        events.publish('modifyConfirm', formValues);    // subscribed by library.js
        _clearValues();

    }
    function _cancelInput() {
        _hideForm();
        _clearValues();
    }
    function _alertDeleteProjectConfirmation(cardID) {
        // * display project delete confirmation
        // * if confirmation === true...
            events.publish('deleteProject', cardID); // subscribed by library.js
    }

    // helper methods  
    function _showForm(formType) {
        if (formType === 'project') {
            _currentForm = projectForm;
            projectForm.classList.remove('hide');
        } else if (formType === 'task') {
            _currentForm = taskForm;
            taskForm.classList.remove('hide');
        };
    }
    function _hideForm() {
        _currentForm.classList.add('hide');
    }
    function _fillFormValues(formType, values) {
        if (formType === 'project') {
            projectInputs[0].value = values[0];
            for (let i = 1; i < (projectInputs.length); i++) {
                projectInputs[i].value = values[i];
            };
        } else if (formType === 'task') {
            taskInputs[0].value = values[0];
            for (let i = 1; i < (taskInputs.length); i++) {
                taskInputs[i].value = values[i];
            };
            events.publish('openProjectOptionsQuery', '');  // subscribed by library.js
        };
    }
    function _renderProjectOptions(array) {
        let projectDropdown = taskInputs[5];
        for (let i = 0; i < (array.length); i++) {
            console.log(array[i][0]);
            console.log(array[i][1]);
            let optionProject = option(array[i][1], array[i][0]);
            projectDropdown.appendChild(optionProject);
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
    function _bundleFormValues() {
        let formValues = [];
        if (_currentForm === projectForm) {
            formValues.push('project');
            for (let i = 0; i < (projectInputs.length); i++) {  // ! nodelist contains invisible iterables, must specify length
                formValues.push(projectInputs[i].value);
            };
        } else if (_currentForm === taskForm) {
            formValues.push('task');
            for (let i = 0; i < (taskInputs.length); i++) {  // ! nodelist contains invisible iterables, must specify length
                formValues.push(taskInputs[i].value);
            };
        };
        return formValues;
    }

    // bind events
    confirmButtons.forEach(btn => btn.addEventListener('click', (e) => {
        _confirmModify(e);
    }));
    cancelButtons.forEach(btn => btn.addEventListener('click', () => {
        _cancelInput();
    }));
    events.subscribe('clickCreateItem', _openCreateForm);   // publishing from domDisplay.js (createTaskButton clickEvent)
    events.subscribe('clickModifyItem', _openModifyQuery);  // publishing from domDisplay.js (_renderHeaders())
    events.subscribe('closeModifyQuery', _openModifyForm);  // publishing from library.js (_queryItem());
    events.subscribe('closeProjectOptionsQuery', _renderProjectOptions);  // publishing from library.js (_queryProjectNameID())
    events.subscribe('clickDeleteProject', _alertDeleteProjectConfirmation);    // publishing from domDisplay.js (_renderProjectHeader())

})();

export default forms;