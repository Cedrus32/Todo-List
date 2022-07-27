import events from '../events';
import { option } from './elements';

// * manages interface between form DOM & library arrays

const forms = (() => {
    // data
    let _currentForm;
    let _currentFormType;

    // cache DOM
    let projectForm = document.getElementById('project-form');
    let deleteConfirmAlert = document.getElementById('delete-confirm');
    let taskForm = document.getElementById('task-form');

    let projectInputs = projectForm.querySelectorAll('input');
    let taskInputs = taskForm.querySelectorAll('.input');

    let confirmDeleteButton = document.querySelector('button.delete-confirm');
    let cancelDeleteButton = document.querySelector('button.delete-cancel');
    let confirmButtons = document.querySelectorAll('button.confirm');
    let cancelButtons = document.querySelectorAll('button.cancel');

    // manager methods
    function _openCreateForm(formReference) {
        _setFormReferences(formReference);
        _showForm();
    }
    function _openModifyQuery(event) {
        let cardReferences = event.target.closest('div.card').id.split('_');
        _setFormReferences(cardReferences[0]);
        events.publish('openModifyQuery', cardReferences);  // subscribed by library.js
    }
    function _openModifyForm(itemValues) {
        _fillFormValues(itemValues);
        _showForm();
    }
    function _confirmInput() {
        _hideForm();
        let formValues = _bundleFormValues();
        _clearFormValues();
        _removeProjectOptions();

        events.publish('confirmInput', formValues);    // subscribed by library.js
    }
    function _cancelInput() {
        _hideForm();
        _clearFormValues();
        _removeProjectOptions();
    }
    function _showDeleteProjectConfirmation(cardID) {
        deleteConfirmAlert.classList.remove('hide');
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
        //// console.log(values);
        if (_currentFormType === 'project') {
            for (let i = 0; i < (values.length); i++) {
                projectInputs[i].value = values[i];
            };
        } else if (_currentFormType === 'task') {
            for (let i = 0; i < (values.length); i++) {
                if (i === 0) {
                    taskInputs[i].value = values[i];
                } else if (i === 1) {
                    if (values[1] === 'singleton') {
                        taskInputs[1].checked = true;
                    } else if (values[1] === 'checklist') {
                        taskInputs[2].checked = true;
                    };
                } else {
                    taskInputs[i + 1].value = values[i];
                };
            };
        };
    }
    function _bundleFormValues() {
        let formValues = [];
        if (_currentForm === projectForm) {
            formValues.push('project');
            for (let i = 0; i < (projectInputs.length); i++) {
                formValues.push(projectInputs[i].value);
            };
            //// console.log(`project formValues: [${formValues}]`);
        } else if (_currentForm === taskForm) {
            formValues.push('task');
            for (let i = 0; i < (taskInputs.length); i++) {
                if (i === 0 || i > 2) {
                    formValues.push(taskInputs[i].value);
                };
                if (i === 1 || i === 2) {
                    if (taskInputs[i].checked === true) {
                        formValues.push(taskInputs[i].value);
                    };
                };
            };
            //// console.log(`task formValues: [${formValues}]`);
        };
        return formValues;
    }
    function _clearFormValues() {
        if (_currentForm === projectForm) {
            projectInputs.forEach(input => input.value = '');
        } else if (_currentForm === taskForm) {
            for (let i = 0; i < (taskInputs.length); i++) {
                if (((i > 2) && (i < 6)) || (i > 6)) {
                    taskInputs[i].value = '';
                };
            };
        };
        _currentForm = '';
        _currentFormType = '';
    }
    function _renderProjectOptions(array) {
        let projectDropdown = taskInputs[7];
        for (let i = 0; i < (array.length); i++) {
            let projectName = array[i][0];
            let projectID = array[i][1]
            let optionProject = option(projectID, projectName);
            projectDropdown.appendChild(optionProject);
        };
    }
    function _removeProjectOptions() {
        while (taskInputs[7].firstChild) {
            taskInputs[7].removeChild(taskInputs[7].lastChild);
        };
    }

    // bind events
    confirmDeleteButton.addEventListener('click', () => {
        deleteConfirmAlert.classList.add('hide');
        let projectCardID = document.querySelector('div.project.card').id;
        events.publish('deleteProject', projectCardID); // subscribed by library.js
    })
    cancelDeleteButton.addEventListener('click', () => {
        deleteConfirmAlert.classList.add('hide');
    });
    confirmButtons.forEach(btn => btn.addEventListener('click', (e) => {
        _confirmInput(e);
    }));
    cancelButtons.forEach(btn => btn.addEventListener('click', () => {
        _cancelInput();
    }));
    events.subscribe('clickCreateItem', _openCreateForm);   // publishing from domDisplay.js (createTaskButton clickEvent)
    events.subscribe('clickModifyItem', _openModifyQuery);  // publishing from domDisplay.js (_renderHeaders())
    events.subscribe('closeModifyQuery', _openModifyForm);  // publishing from library.js (_queryItem());
    events.subscribe('closeProjectOptionsQuery', _renderProjectOptions);  // publishing from library.js (_queryProjectNameID())
    events.subscribe('clickDeleteProject', _showDeleteProjectConfirmation);    // publishing from domDisplay.js (_renderProjectHeader())

})();

export default forms;