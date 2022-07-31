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
    let checkboxForm = document.getElementById('checkbox-form');

    let projectFormInputs = projectForm.querySelectorAll('input');
    let taskFormInputs = taskForm.querySelectorAll('.input');
    let checkboxFormInputs = checkboxForm.querySelectorAll('input');

    let confirmButtons = document.querySelectorAll('button.confirm');
    let cancelButtons = document.querySelectorAll('button.cancel');
    let confirmDeleteFormButton = document.querySelector('button.delete-confirm');
    let cancelDeleteFormButton = document.querySelector('button.delete-cancel');

    // query methods
    function _openModifyFormQuery(event) {
        let targetItemReferences;
        if (event.target.closest('li.card')) {
            let formTypeReference = 'checkbox';
            let taskReference = event.target.closest('div.card').id.split('_')[1];
            let checkboxReference = event.target.closest('li.card').id.split('__')[1].split('_')[1];
            targetItemReferences = [formTypeReference, [taskReference, checkboxReference]]; // * taskReference & checkboxReference must be bundled, split in library.js
        } else {
            targetItemReferences = event.target.closest('div.card').id.split('_');
        };
        _setFormReferences(targetItemReferences[0]);
        events.publish('openModifyFormQuery', targetItemReferences);  // subscribed by library.js
    }

    // form managers
    function _openCreateForm(formReference) {
        if ((typeof formReference) === 'object') { // ^ stores task reference when creating a new checklist item
            checkboxFormInputs[0].value = formReference[1];
            _setFormReferences(formReference[0]);
        } else if ((typeof formReference) === 'string') {
            _setFormReferences(formReference);
        }
        _enableTaskTypeSelection();
        _showForm();
    }
    function _openModifyForm(itemValues) {
        _fillFormValues(itemValues);
        _disableTaskTypeSelection();
        _showForm();
    }

    // form actions
    function _showDeleteProjectConfirmation() {
        deleteConfirmAlert.classList.remove('hide');
    }
    function _confirmInput() {
        _hideForm();
        let formValues = _bundleFormValues();
        _clearFormValues();
        if (_currentForm === taskForm) {
            _removeProjectOptions();
        };

        events.publish('confirmInput', formValues);    // subscribed by library.js
    }
    function _cancelInput() {
        _hideForm();
        _clearFormValues();
        _removeProjectOptions();
    }

    // helper methods  
    function _setFormReferences(formReference) {
        if (formReference === 'project') {
            _currentForm = projectForm;
            _currentFormType = 'project';
        } else if (formReference === 'task') {
            _currentForm = taskForm;
            _currentFormType = 'task';
        } else if (formReference === 'checkbox') {
            _currentForm = checkboxForm;
            _currentFormType = 'checkbox';
        };
    }
    function _showForm() {
        _currentForm.classList.remove('hide');
        if (_currentForm === taskForm) {
            events.publish('openProjectOptionsQuery', '');  // subscribed by library.js
        };
    }
    function _hideForm() {
        _currentForm.classList.add('hide');
    }
    function _fillFormValues(values) {
        if (_currentFormType === 'project') {
            for (let i = 0; i < (values.length); i++) {
                projectFormInputs[i].value = values[i];
            };
        } else if (_currentFormType === 'task') {
            for (let i = 0; i < (values.length); i++) {
                if (i === 0) {
                    taskFormInputs[i].value = values[i];
                } else if (i === 1) {
                    if (values[1] === 'singleton') {
                        taskFormInputs[1].checked = true;
                    } else if (values[1] === 'checklist') {
                        taskFormInputs[2].checked = true;
                    };
                } else if (i === 7) {
                    console.log(values[7]);
                    let tagsStringified = values[7].join(' ');
                    console.log(tagsStringified);
                    taskFormInputs[i + 1].value = tagsStringified;
                } else {
                    taskFormInputs[i + 1].value = values[i];
                };
            };
        } else if (_currentFormType === 'checkbox') {
            let instanceReferences = `${values[1]}_${values[2]}`;
            checkboxFormInputs[0].value = instanceReferences;
            checkboxFormInputs[1].value = values[3];
        };
    }
    function _bundleFormValues() {
        console.log(_currentForm);
        let formValues = [];
        if (_currentForm === projectForm) {
            formValues.push('project');
            for (let i = 0; i < (projectFormInputs.length); i++) {
                formValues.push(projectFormInputs[i].value);
            };
        } else if (_currentForm === taskForm) {
            console.log(taskFormInputs);
            formValues.push('task');
            for (let i = 0; i < (taskFormInputs.length); i++) {
                if (i === 0 || ((i > 2) && (i < 8))) {
                    formValues.push(taskFormInputs[i].value);
                };
                if (i === 1 || i === 2) {
                    if (taskFormInputs[i].checked === true) {
                        formValues.push(taskFormInputs[i].value);
                    };
                };
                if (i === 8) {
                    let tagsArrayed = taskFormInputs[i].value.split(' ');
                    formValues.push(tagsArrayed);
                };
            };
        } else if (_currentForm === checkboxForm) {
            formValues.push('checkbox');
            formValues.push(checkboxFormInputs[0].value.split('_')[0]);
            formValues.push(checkboxFormInputs[0].value.split('_')[1]);
            formValues.push(checkboxFormInputs[1].value);
        };
        console.log(formValues);
        return formValues;
    }
    function _clearFormValues() {
        if (_currentForm === projectForm) {
            projectFormInputs.forEach(input => input.value = '');
        } else if (_currentForm === taskForm) {
            for (let i = 0; i < (taskFormInputs.length); i++) {
                if ((i === 0) || ((i > 2) && (i < 6)) || (i > 6)) {
                    taskFormInputs[i].value = '';
                };
                if (i === 1) {
                    taskFormInputs[i].checked = true;
                };
                if (i === 2) {
                    taskFormInputs[i].checked = false;
                }
                if (i === 6) {
                    taskFormInputs[i].selectedIndex = 0;
                };
            };
        } else if (_currentForm === checkboxForm) {
            checkboxFormInputs.forEach(input => input.value = '');
        };
        _currentForm = '';
        _currentFormType = '';
    }
    function _renderProjectOptions(array) {
        let projectDropdown = taskFormInputs[7];
        for (let i = 0; i < (array.length); i++) {
            let projectName = array[i][0];
            let projectID = array[i][1]
            let optionProject = option(projectID, projectName);
            projectDropdown.appendChild(optionProject);
        };
    }
    function _removeProjectOptions() {
        while (taskFormInputs[7].firstChild) {
            taskFormInputs[7].removeChild(taskFormInputs[7].lastChild);
        };
    }
    function _enableTaskTypeSelection() {
        taskFormInputs[1].disabled = false;
        taskFormInputs[2].disabled = false;
    }
    function _disableTaskTypeSelection() {
        taskFormInputs[1].disabled = true;
        taskFormInputs[2].disabled = true;
    }

    // bind events
    confirmDeleteFormButton.addEventListener('click', () => {
        deleteConfirmAlert.classList.add('hide');
        let projectCardID = document.querySelector('div.project.card').id;
        events.publish('deleteProject', projectCardID); // subscribed by library.js
    })
    cancelDeleteFormButton.addEventListener('click', () => {
        deleteConfirmAlert.classList.add('hide');
    });
    confirmButtons.forEach(btn => btn.addEventListener('click', (e) => {
        _confirmInput(e);
    }));
    cancelButtons.forEach(btn => btn.addEventListener('click', () => {
        _cancelInput();
    }));
    events.subscribe('clickCreateItem', _openCreateForm);   // publishing from domDisplay.js (createTaskButton clickEvent)
    events.subscribe('clickModifyItem', _openModifyFormQuery);  // publishing from domDisplay.js (_renderHeaders())
    events.subscribe('closeModifyQuery', _openModifyForm);  // publishing from library.js (_queryItemInstance());
    events.subscribe('closeProjectOptionsQuery', _renderProjectOptions);  // publishing from library.js (_queryProjectNameID())
    events.subscribe('clickDeleteProject', _showDeleteProjectConfirmation);    // publishing from domDisplay.js (_renderProjectHeader())

})();

export default forms;