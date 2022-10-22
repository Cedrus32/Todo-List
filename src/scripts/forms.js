import events from '../events';
import { default as div, span, p, input, label, select, option, legend, img } from './elements';
import iconsArray from './icons';

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
    let projectIconContainers; // * queried after project form is rendered
    let confirmButton = document.querySelectorAll('button.confirm');
    let cancelButton = document.querySelectorAll('button.cancel');

    // event listeners
    confirmButton.forEach(btn => btn.addEventListener('click', (e) => {
        _confirmInput(e);
    }));
    cancelButton.forEach(btn => btn.addEventListener('click', () => {
        _cancelInput();
    }));

    // form managers
    function _openCreateForm(formReference) {

        switch (true) {
            case ((typeof formReference) === 'object'):   // * stores task reference when creating new checklist item
                let taskReference = formReference[1];
                _setFormReferences(formReference[0]);
                _renderCheckboxForm(taskReference, 'Create New Checklist Item');
                break;
            case ((typeof formReference) === 'string'):
                _setFormReferences(formReference);
                switch (_currentFormType) {
                    case 'project':
                        _renderProjectForm('Create New Project');
                        break;
                    case 'task':
                        _renderTaskForm('Create New Task');
                };
        };

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
        _setFormReferences(itemValues[0]);
        _fillFormValues(itemValues);
        _showForm();
    }

    // form actions
    function _confirmInput() {
        //// console.log(_currentFormType);
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
        console.log(formReference);
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
        //// console.log(project.id)
        if (project !== undefined) {
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
                _renderProjectForm('Edit Project');
                for (let i = 0; i < (formInputs.length); i++) {
                    formInputs[i].value = values[i + 1];
                };
                for (let i = 0; i < (projectIconContainers.length); i++) {
                    let projectIcon = projectIconContainers[i].children[0];
                    if (projectIcon.src.includes(values[values.length - 1])) {
                        _updateIconSelection(projectIconContainers[i]);
                    };
                };
                break;
            case 'task':
                _renderTaskForm('Edit Task');
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
                let instanceReferences = `${values[1]}_${values[2]}`;   // * passed to library for indexing correct task && checklist item
                _renderCheckboxForm(instanceReferences, 'Edit Checklist Item');
                formInputs[1].value = values[3];
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
                for (let i = 0; i < (projectIconContainers.length); i++) {
                    if (projectIconContainers[i].classList.contains('icon-selected')) {
                        let projectIcon = projectIconContainers[i].children[0]
                        let splitImgSrc = projectIcon.src.split('/');
                        let selectedIconReference = splitImgSrc[splitImgSrc.length - 1].split('.')[0];
                        formValues.push(selectedIconReference);
                    };
                };
                break;
            case 'task':
                console.log(formInputs);
                formValues.push('task');
                for (let i = 0; i < (formInputs.length); i++) {
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
    function _updateIconSelection(target) {
        let targetContainer = target.closest('div');
        for (let i = 0; i < (projectIconContainers.length); i++) {
            let iconContainer = projectIconContainers[i].closest('div');
            if (iconContainer.classList.contains('icon-selected')) {
                iconContainer.classList.remove('icon-selected');
            };
        };

        targetContainer.classList.add('icon-selected');
    }

    // form factories
    const _renderProjectForm = function(formTitle) {
        let fieldsetLegend = legend(formTitle, '');

        let titleDiv = div('', '.input-label-group');
        let spanRequiredBadge = span('*', '.required-badge');
        let spanErrorMessage = span('please include a title', '.error-message', '.hide');
        let labelTitle = label('Title ', 'project-title');
        labelTitle.append(spanRequiredBadge, spanErrorMessage);
        let inputTitle = input('text', 'project-title', 'title', 'project-title', '');
        inputTitle.required = true;
        inputTitle.ariaRequired = true;
        titleDiv.append(labelTitle, inputTitle);

        let descriptionDiv = div('', '.input-label-group');
        let labelDescription = label('Description', '.project-description');
        let inputDescription = input('text', 'project-description', 'description', 'project-description', '');
        descriptionDiv.append(labelDescription, inputDescription);

        let iconsDiv = div('', '.label-icons-group');
        let labelIcons = label('Choose An Icon', '', '');
        let iconsContainer = div('', '.project-icons-container');
        for (let i = 0; i < 15; i++) {
            let imgContainer = div('', '');
            if (i === 0) {
                imgContainer.classList.add('icon-selected');
            };
            imgContainer.addEventListener('click', (e) => {
                _updateIconSelection(e.target);
            });

            let imgRef;
            let imgAlt;
            switch (i) {
                case 0:
                    imgRef = '00';
                    imgAlt = 'folder';
                    break;
                case 1:
                    imgRef = '01';
                    imgAlt = 'star';
                    break;
                case 2:
                    imgRef = '02';
                    imgAlt = 'hammer and wrench';
                    break;
                case 3:
                    imgRef = '03';
                    imgAlt = 'fork and soda cup';
                    break;
                case 4:
                    imgRef = '04';
                    imgAlt = 'dollar bills';
                    break;
                case 5:
                    imgRef = '05';
                    imgAlt = 'city buildings';
                    break;
                case 6:
                    imgRef = '06';
                    imgAlt = 'house';
                    break;
                case 7:
                    imgRef = '07';
                    imgAlt = 'gift';
                    break;
                case 8:
                    imgRef = '08';
                    imgAlt = 'car';
                    break;
                case 9:
                    imgRef = '09';
                    imgAlt = 'airplane';
                    break;
                case 10:
                    imgRef = '10';
                    imgAlt = 'baby carriage';
                    break;
                case 11:
                    imgRef = '11';
                    imgAlt = 'flower';
                    break;
                case 12:
                    imgRef = '12';
                    imgAlt = 'palm tree';
                    break;
                case 13:
                    imgRef = '13';
                    imgAlt = 'volley ball';
                    break;
                case 14:
                    imgRef = '14';
                    imgAlt = 'backpack';
            };
            // let imgIcon = img(`src/icons/project-icons/${imgRef}.svg`, imgAlt);
            let imgIcon = img(iconsArray[imgRef], imgAlt);

            imgContainer.appendChild(imgIcon);
            iconsContainer.appendChild(imgContainer);
        };
        iconsDiv.append(labelIcons, iconsContainer);

        formFieldset.append(fieldsetLegend, titleDiv, descriptionDiv, iconsDiv);

        formInputs = formContainer.querySelectorAll('input');
        projectIconContainers = document.querySelector('.project-icons-container').children;
    }
    const _renderTaskForm = function(formTitle) {
        let fieldsetLegend = legend(formTitle, '');

        let typeDiv = div('', '.input-label-group');
        let labelTaskType = label('Task Type', '');
        let divTypeOptions = div('', '.type-options');
        
        let divSingleton = div('', '.type-group');
        let radioSingleton = input('radio', 'type', '', 'singleton', '.input',);
        radioSingleton.checked = true;
        let labelSingleton = label('Single Task', 'singleton', '');
        divSingleton.append(radioSingleton, labelSingleton);
        let divChecklist = div('', '.type-group');
        let radioChecklist = input('radio', 'type', '', 'checklist', '.input');
        let labelChecklist = label('Task List', 'checklist', '');
        divChecklist.append(radioChecklist, labelChecklist);
        divTypeOptions.append(divSingleton, divChecklist);
        typeDiv.append(labelTaskType, divTypeOptions);

        let titleDiv = div('', '.input-label-group');
        let spanRequiredBadge = span('*', '.required-badge');
        let spanErrorMessage = span('please include a title', '.error-message', '.hide');
        let labelTitle = label('Title ', 'task-title');
        labelTitle.append(spanRequiredBadge, spanErrorMessage);
        let inputTitle = input('text', 'task-title', 'title', 'task-title', '.input');
        inputTitle.required = true;
        inputTitle.ariaRequired = true;
        titleDiv.append(labelTitle, inputTitle);

        let descriptionDiv = div('', '.input-label-group');
        let labelDescription = label('Task Description', 'description');
        let inputDescription = input('text', 'description', 'description', 'task-description', '.input');
        descriptionDiv.append(labelDescription, inputDescription);

        let dueDateDiv = div('', '.input-label-group');
        let labelDueDate = label('Due Date', 'due-date');
        let inputDueDate = input('date', 'due-date', '', 'due-date', '.input');
        dueDateDiv.append(labelDueDate, inputDueDate);

        let divDropdowns = div('', '.dropdowns');
        let divPriority = div('', '.input-label-group');
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
        let divProject = div('', '.input-label-group');
        let labelProject = label('Project', 'project', '');
        let selectProject = select('project', '#project', '.input');
        divPriority.append(labelPriority, selectPriority);
        divProject.append(labelProject, selectProject);
        divDropdowns.append(divPriority, divProject);

        formFieldset.append(fieldsetLegend, typeDiv, titleDiv, descriptionDiv, dueDateDiv, divDropdowns)

        let projectReferenceContainer = formContainer.querySelector('input');
        projectReferenceContainer.classList.add('input');

        formInputs = formContainer.querySelectorAll('.input');
        events.publish('openProjectOptionsQuery', '');  // subscribed by library.js
    }
    const _renderProjectOptions = function(array) {
        let projectDropdown = formInputs[7];
        for (let i = 0; i < (array.length); i++) {
            let projectName = array[i][0];
            let projectID = array[i][1];
            let optionProject = option(projectID, projectName);

            if (_currentProject == projectID) {
                optionProject.selected = true;
            };

            projectDropdown.appendChild(optionProject);
        };
    }
    const _renderCheckboxForm = function(taskReference, formTitle) {
        let fieldsetLegend = legend(formTitle, '');

        let titleDiv = div('', '.input-label-group');
        let spanRequiredBadge = span('*', '.required-badge');
        let spanErrorMessage = span('please include a title', '.error-message', '.hide');
        let labelTitle = label('Title ', 'project-title');
        labelTitle.append(spanRequiredBadge, spanErrorMessage);
        let inputTitle = input('text', 'checkbox-title', 'title', 'checkbox-title', '');
        inputTitle.required = true;
        inputTitle.ariaRequired = true;
        titleDiv.append(labelTitle, inputTitle);

        formFieldset.append(fieldsetLegend, titleDiv);

        formInputs = formContainer.querySelectorAll('input');
        formInputs[0].value = taskReference;    // * passed to library.js for indexing correct task
    }
    const _renderDeleteConfirmationForm = function() {
        let fieldsetLegend = legend('Delete This Project', '');

        let p1 = p('Deleting a project will also delete all of its tasks.', '');
        let p2 = p('Are you SURE you want to proceed?', '');
        
        formFieldset.append(fieldsetLegend, p1, p2);
    }

    // event subscriptions

    events.subscribe('clickCreateItem', _openCreateForm);   // published from display.js (.create clickEvents)
    events.subscribe('clickCreateProject', _openCreateForm);    // publishing from sidebar.js (createProjectButton clickEvent)

    events.subscribe('clickModifyItem', _openModifyInstanceQuery);  // publishing from display.js (_render...Header())
    events.subscribe('closeModifyInstanceQuery', _openModifyForm);  // publishing from library.js (_queryItemInstance());

    events.subscribe('projectCreated', _setCurrentProject); // published from library.js (_createProject())
    events.subscribe('setCurrentProject', _setCurrentProject) // published from library.js (_bundleInstances())
    events.subscribe('closeProjectOptionsQuery', _renderProjectOptions);  // publishing from library.js (_queryProjectNameID())

    events.subscribe('clickDeleteProject', _showDeleteProjectConfirmation);    // published from display.js (_renderProjectHeader())
})();

export default forms;