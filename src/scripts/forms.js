import events from '../events';
import { default as div, span, p, input, label, select, option, legend } from './elements';

// & manages display/sidebar section DOMs -> form section DOMs <-> library communication
// & contains factories for generating form section DOM elements / groupings

const forms = (() => {
    // let _currentForm;
    let _currentFormType;
    let _currentProject;

    // cache DOM
    let formContainer = document.querySelector('.form-container');
    let formFieldset = formContainer.querySelector('fieldset');
    let formInputs; // * queried after form elements are rendered
    // let projectForm = document.getElementById('project-form');
    // let deleteConfirmAlert = document.getElementById('delete-confirm');
    // let taskForm = document.getElementById('task-form');
    // let checkboxForm = document.getElementById('checkbox-form');

    // let projectFormInputs = projectForm.querySelectorAll('input');
    // let taskFormInputs = taskForm.querySelectorAll('.input');
    // let checkboxFormInputs = checkboxForm.querySelectorAll('input');

    let confirmButton = document.querySelectorAll('button.confirm');
    let cancelButton = document.querySelectorAll('button.cancel');
    // let confirmDeleteFormButton = document.querySelector('button.delete-confirm');
    // let cancelDeleteFormButton = document.querySelector('button.delete-cancel');

    // event listeners
    confirmButton.forEach(btn => btn.addEventListener('click', (e) => {
        _confirmInput(e);
    }));
    cancelButton.forEach(btn => btn.addEventListener('click', () => {
        _cancelInput();
    }));
    // confirmDeleteFormButton.addEventListener('click', () => {
    //     deleteConfirmAlert.classList.add('hide');
    //     let projectCardID = document.querySelector('div.project.card').id;
    //     events.publish('confirmDeleteProject', projectCardID);  // subscribed by library.js
    // })
    // cancelDeleteFormButton.addEventListener('click', () => {
    //     deleteConfirmAlert.classList.add('hide');
    // });

    // form managers
    function _openCreateForm(formReference) {
        console.log(formReference);

        switch (true) {
            case ((typeof formReference) === 'object'):   // * stores task reference when creating new checklist item
                let taskReference = formReference[1];
                _setFormReferences(formReference[0]);
                _renderCheckboxForm(taskReference);
                break;
            case ((typeof formReference) === 'string'):
                _setFormReferences(formReference);
                switch (_currentFormType) {
                    case 'project':
                        _renderProjectForm();
                        break;
                    case 'task':
                        _renderTaskForm();
                };
        };

        console.log(formInputs);

        _showForm();
    }
    function _openModifyInstanceQuery(event) {
        let targetItemReferences;

        let isCheckbox;
        switch(true)  {
            case (event.target.closest('li.card') === null):
                isCheckbox = false;
                break;
            case (event.target.closest('li.card') !== null):
                isCheckbox = true;
        };

        switch (isCheckbox) {
            case false:
                targetItemReferences = event.target.closest('div.card').id.split('_');
                break;
            case true:
                let formTypeReference = 'checkbox';
                let taskReference = event.target.closest('div.card').id.split('_')[1];
                let checkboxReference = event.target.closest('li.card').id.split('__')[1].split('_')[1];
                targetItemReferences = [formTypeReference, [taskReference, checkboxReference]]; // * taskReference & checkboxReference must be bundled, split in library.js
        };

        events.publish('openModifyInstanceQuery', targetItemReferences);  // subscribed by library.js
    }
    function _openModifyForm(itemValues) {
        console.log(itemValues);
        _setFormReferences(itemValues[0]);
        _fillFormValues(itemValues);
        _showForm();
    }

    // form actions
    function _confirmInput() {
        switch (_currentFormType) {
            case 'delete-confirm':
                _hideForm();
                let projectCardID = document.querySelector('div.project.card').id;
                _clearFormValues();
                events.publish('confirmDeleteProject', projectCardID);  // subscribed by library.js
                break;
            default:
                let isValid = _validateForm();
                switch(isValid) {
                    case true:
                        _hideForm();
                        let formValues = _bundleFormValues();
                        _findErrors('hide');
                        _clearFormValues();
                        events.publish('confirmInput', formValues);    // subscribed by library.js
                        break;
                    case false:
                        _findErrors('show');
                };
        };
    }
    function _cancelInput() {
        _hideForm();
        _clearFormValues();
    }
    function _showDeleteProjectConfirmation() {
        _setFormReferences('delete-confirm');
        _renderDeleteConfirmationForm();
        formContainer.classList.remove('hide');
    }

    // helper methods  
    function _setFormReferences(formReference) {
        switch (formReference) {
            case 'project':
                formContainer.id = 'project-form'
                _currentFormType = 'project';
                break;
            case 'task':
                formContainer.id = 'task-form'
                _currentFormType = 'task';
                break;
            case 'checkbox':
                formContainer.id = 'checkbox-form'
                _currentFormType = 'checkbox';
                break;
            case 'delete-confirm':
                formContainer.id = 'delete-confirm';
                _currentFormType = 'delete-confirm';
        };
    }
    function _setCurrentProject(project) {
        switch (true) {
            case (project[0] !== undefined):
                _currentProject = project[1].id;
                break;
            default:
                _currentProject = project.id;
        };
    }
    function _showForm() {
        formContainer.classList.remove('hide');
    }
    function _hideForm() {
        formContainer.classList.add('hide');
    }
    function _fillFormValues(values) {
        switch (_currentFormType) {
            case 'project':
                _renderProjectForm();
                for (let i = 0; i < (formInputs.length); i++) {
                    console.log(i);
                    formInputs[i].value = values[i + 1];
                };
                break;
            case 'task':
                _renderTaskForm();
                console.log(values);
                console.log(formInputs);
                for (let i = 1; i < (values.length); i++) {
                    switch (i) {
                        case 1:
                            formInputs[i - 1].value = values[i];
                            break;
                        case 2:
                            switch (values[2]) {
                                case 'singleton':
                                    formInputs[1].checked = true;
                                    break;
                                case 'checklist':
                                    formInputs[2].checked = true;
                            };
                            break;
                        default:
                            formInputs[i].value = values[i];
                    };
                };
                _disableTaskTypeSelection();
                break;
            case 'checkbox':
                _renderCheckboxForm();
                let instanceReferences = `${values[1]}_${values[2]}`;   // * passed to library for indexing correct task && checklist item
                formInputs[0].value = instanceReferences;
                formInputs[1].value = values[3];
        };
    }
    function _removeProjectOptions(taskFormInputsIndex) {
        while (taskFormInputs[taskFormInputsIndex].firstChild) {
            taskFormInputs[taskFormInputsIndex].removeChild(taskFormInputs[taskFormInputsIndex].lastChild);
        };
    }
    function _bundleFormValues() {
        //// console.log(_currentFormType);
        let formValues = [];

        switch (_currentFormType) {
            case 'project':
                formValues.push('project');
                for (let i = 0; i < (formInputs.length); i++) {
                    formValues.push(formInputs[i].value);
                };
                break;
            case 'task':
                console.log(formInputs);
                formValues.push('task');
                for (let i = 0; i < (formInputs.length); i++) {
                    console.log(i);
                    if (i === 0 || ((i > 2) && (i < 8))) {
                        formValues.push(formInputs[i].value);
                    };
                    if (i === 1 || i === 2) {
                        if (formInputs[i].checked === true) {
                            formValues.push(formInputs[i].value);
                        };
                    };
                };
                break;
            case 'checkbox':
                formValues.push('checkbox');
                formValues.push(formInputs[0].value.split('_')[0]);
                formValues.push(formInputs[0].value.split('_')[1]);
                formValues.push(formInputs[1].value);
        };

        console.log(formValues);
        return formValues;
    }
    function _clearFormValues() {
        _removeFormElements();
        if (_currentFormType !== 'delete-confirm') {
            if (formInputs[0].classList.contains('input')) {
                formInputs[0].classList.remove('input');
            };
            formInputs[0].value = '';
        };
        formInputs = '';
        _currentFormType = '';
    }
    function _removeFormElements() {
        let fieldsetChildrenLength = formFieldset.children.length;
        for (let i = 0; i < (fieldsetChildrenLength); i++) {
            while (formFieldset.firstChild) {
                formFieldset.removeChild(formFieldset.lastChild);
            };
        };
    }
    function _enableTaskTypeSelection() {
        formInputs[1].disabled = false;
        formInputs[2].disabled = false;
    }
    function _disableTaskTypeSelection() {
        formInputs[1].disabled = true;
        formInputs[2].disabled = true;
    }
    function _validateForm() {
        return formContainer.querySelector('form').checkValidity();
    }
    function _findErrors(process) {
        let titleInput;
        formInputs.forEach(input => {
            if (input.id.split('-')[1] === 'title') {
                titleInput = input;
            };
        });

        switch (process) {
            case 'show':
                _showErrorMessage(titleInput);
                break;
            case 'hide':
                _hideErrorMessage(titleInput);
        };
    }
    function _showErrorMessage(input) {
        let label = input.previousElementSibling;
        label.lastChild.classList.remove('hide');
    }
    function _hideErrorMessage(input) {
        let label = input.previousElementSibling;
        label.lastChild.classList.add('hide');
    }

    // form factories
    const _renderProjectForm = function() {
        let fieldsetLegend = legend('Create a New Project', '');

        let spanRequiredBadge = span('*', '.required-badge');
        let spanErrorMessage = span('please include a title', '.error-message', '.hide');
        let labelTitle = label('title ', 'project-title');
        labelTitle.append(spanRequiredBadge, spanErrorMessage);
        let inputTitle = input('text', 'project-title', 'title', 'project-title', '');
        inputTitle.required = true;
        inputTitle.ariaRequired = true;

        let labelDescription = label('description', '.project-description');
        let inputDescription = input('text', 'project-description', 'description', 'project-description', '');

        formFieldset.append(fieldsetLegend, labelTitle, inputTitle, labelDescription, inputDescription);

        formInputs = formContainer.querySelectorAll('input');
    }
    const _renderTaskForm = function() {        
        let fieldsetLegend = legend('Create a New Task', '');

        let labelTaskType = label('Task Type', '');
        let divTypeOptions = div('', '.type-options');
        let radioSingleton = input('radio', 'type', '', 'singleton', '.input',);
        radioSingleton.checked = true;
        let labelSingleton = label('Single Task', 'singleton', '');
        let radioChecklist = input('radio', 'type', '', 'checklist', '.input');
        let labelChecklist = label('Task List', 'checklist', '');
        divTypeOptions.append(radioSingleton, labelSingleton, radioChecklist, labelChecklist);

        let spanRequiredBadge = span('*', '.required-badge');
        let spanErrorMessage = span('please include a title', '.error-message', '.hide');
        let labelTitle = label('Title ', 'task-title');
        labelTitle.append(spanRequiredBadge, spanErrorMessage);
        let inputTitle = input('text', 'task-title', 'title', 'task-title', '.input');
        inputTitle.required = true;
        inputTitle.ariaRequired = true;

        let labelDescription = label('Task Description', 'description');
        let inputDescription = input('text', 'description', 'description', 'task-description', '.input');

        let labelDueDate = label('Due Date', 'due-date');
        let inputDueDate = input('date', 'due-date', '', 'due-date', '.input');

        let divDropdowns = div('', '.dropdowns');
        let divPriority = div('', '');
        let labelPriority = label('Priority', 'priority', '');
        let selectPriority = select('priority', '#priority', '.input');
        for (let i = 0; i < 4; i++) {
            let content;
            switch (i) {
                case 0:
                    content = 'none ( )';
                    break;
                case 1:
                    content = 'low (!)';
                    break;
                case 2:
                    content = 'medium (!!)';
                    break;
                case 3:
                    content = 'high (!!!)';
            };
            let optionPriority = option(i, content);
            selectPriority.appendChild(optionPriority);
        };
        let divProject = div('', '');
        let labelProject = label('Project', 'project', '');
        let selectProject = select('project', '#project', '.input');
        divPriority.append(labelPriority, selectPriority);
        divProject.append(labelProject, selectProject);
        divDropdowns.append(divPriority, divProject);

        formFieldset.append(fieldsetLegend, labelTaskType, divTypeOptions, labelTitle, inputTitle, labelDescription, inputDescription, labelDueDate, inputDueDate, divDropdowns);

        let projectReferenceContainer = formContainer.querySelector('input');
        projectReferenceContainer.classList.add('input');

        formInputs = formContainer.querySelectorAll('.input');
        events.publish('openProjectOptionsQuery', '');  // subscribed by library.js
    }
    const _renderProjectOptions = function(array) {
        console.log(array);
        let projectDropdown = formInputs[7];
        console.log(formInputs);
        for (let i = 0; i < (array.length); i++) {
            let projectName = array[i][0];
            let projectID = array[i][1];
            let optionProject = option(projectID, projectName);

            if (_currentProject === projectID) {
                optionProject.selected = true;
            };

            projectDropdown.appendChild(optionProject);
        };
    }
    const _renderCheckboxForm = function(taskReference) {
        console.log(taskReference);
        let fieldsetLegend = legend('Create a New Checklist Item', '');

        let spanRequiredBadge = span('*', '.required-badge');
        let spanErrorMessage = span('please include a title', '.error-message', '.hide');
        let titleLabel = label('title ', 'project-title');
        titleLabel.append(spanRequiredBadge, spanErrorMessage);
        let inputTitle = input('text', 'checkbox-title', 'title', 'checkbox-title', '');
        inputTitle.required = true;
        inputTitle.ariaRequired = true;

        formFieldset.append(fieldsetLegend, titleLabel, inputTitle);

        formInputs = formContainer.querySelectorAll('input');
        formInputs[0].value = taskReference;    // * passed to library.js for indexing correct task
    }
    const _renderDeleteConfirmationForm = function() {
        let fieldsetLegend = legend('Delete this Project', '');

        let p1 = p('Deleting a project will also delete all of its tasks.', '');
        let p2 = p('Are you SURE you want to proceed?', '');
        
        formFieldset.append(fieldsetLegend, p1, p2);
    }

    // event subscriptions

    events.subscribe('clickCreateItem', _openCreateForm);   // published from display.js (createTaskButton clickEvent, _renderChecklistSubheader())
    events.subscribe('clickCreateProject', _openCreateForm);    // publishing from sidebar.js (createProjectButton clickEvent)

    events.subscribe('clickModifyItem', _openModifyInstanceQuery);  // publishing from display.js (_render...Header())
    events.subscribe('closeModifyInstanceQuery', _openModifyForm);  // publishing from library.js (_queryItemInstance());

    events.subscribe('projectCreated', _setCurrentProject); // published from library.js (_createProject())
    events.subscribe('updateDisplayView', _setCurrentProject) // published from library.js (_bundleInstances())
    events.subscribe('closeProjectOptionsQuery', _renderProjectOptions);  // publishing from library.js (_queryProjectNameID())

    events.subscribe('clickDeleteProject', _showDeleteProjectConfirmation);    // published from display.js (_renderProjectHeader())
})();

export default forms;