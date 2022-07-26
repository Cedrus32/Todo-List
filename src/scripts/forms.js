import events from '../events';
import { option } from './elements';

// * manages interface between form DOM & library arrays

const forms = (() => {
    // data
    let _currentForm;
    let _currentFormType;

    // cache DOM
    let projectForm = document.getElementById('project-form');
    let taskForm = document.getElementById('task-form');

    let projectInputs = projectForm.querySelectorAll('input');
    let taskInputs = taskForm.querySelectorAll('.input');

    let confirmButtons = document.querySelectorAll('button.confirm');
    let cancelButtons = document.querySelectorAll('button.cancel');

    // manager methods
    function _openCreateForm(formReference) {
        _setFormReferences(formReference);
        _showForm();
    }
    function _openModifyQuery(event) {
        let cardID = event.target.closest('div.card').id;
        _setFormReferences(cardID.slice(0, (cardID.length - 1)));
        events.publish('openModifyQuery', cardID);  // subscribed by library.js
    }
    function _openModifyForm(itemValues) {
        _fillFormValues(itemValues);
        _showForm(_currentForm);
    }
    function _confirmModify() {
        _hideForm();
        let formValues = _bundleFormValues();
        _clearValues();
        _removeProjectOptions();
        _currentForm = '';

        events.publish('modifyConfirm', formValues);    // subscribed by library.js
    }
    function _cancelInput() {
        _hideForm();
        _clearValues();
        _removeProjectOptions();
        _currentForm = '';
    }
    function _alertDeleteProjectConfirmation(cardID) {
        // * display project delete confirmation
        // * if confirmation === true...
            events.publish('deleteProject', cardID); // subscribed by library.js
    }

    // helper methods  
    function _setFormReferences(formReference) {
        if (formReference === 'project') {
            _currentForm = projectForm;
            _currentFormType = 'project';
        } else if (formReference === 'task') {
            _currentForm = taskForm;
            _currentFormType = 'task';
        };
    }
    function _showForm() {
        _currentForm.classList.remove('hide');
        events.publish('openProjectOptionsQuery', '');  // subscribed by library.js
    }
    function _hideForm() {
        _currentForm.classList.add('hide');
    }
    function _fillFormValues(values) {
        if (_currentFormType === 'project') {
            projectInputs[0].value = values[0];
            for (let i = 1; i < (projectInputs.length); i++) {
                projectInputs[i].value = values[i];
            };
        } else if (_currentFormType === 'task') {
            taskInputs[0].value = values[0];
            for (let i = 1; i < (taskInputs.length); i++) {
                taskInputs[i].value = values[i];
            };
        };
    }
    function _renderProjectOptions(array) {
        let projectDropdown = taskInputs[5];
        for (let i = 0; i < (array.length); i++) {
            let projectName = array[i][0];
            let projectID = array[i][1]
            let optionProject = option(projectID, projectName);
            projectDropdown.appendChild(optionProject);
        };
    }
    function _removeProjectOptions() {
        console.log(taskInputs[5]);
        while (taskInputs[5].firstChild) {
            taskInputs[5].removeChild(taskInputs[5].lastChild);
        };
        console.log(taskInputs[5]);
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
            for (let i = 0; i < (projectInputs.length); i++) {
                formValues.push(projectInputs[i].value);
            };
        } else if (_currentForm === taskForm) {
            formValues.push('task');
            for (let i = 0; i < (taskInputs.length); i++) {
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