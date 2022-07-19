import library from './library';

// * manages interface between form DOM & library arrays

const forms = (() => {
    // data

    // cache DOM
    let projForm = document.getElementById('proj-form');
    let taskForm = document.getElementById('task-form');

    // bind events

    // factories

    // manager methods
    function openCreate(formType) {
        showForm(formType);
    }
    function openModify(formType) {
        // query library
        // populate fields
        showForm(formType);
    }

    // helper methods
    function showForm(formType) {
        if (formType === 'proj') {
            projForm.classList.remove('hide');
        } else if (formType === 'task') {
            taskForm.classList.remove('hide');
        };
    }

    return {
        openCreate, // domDisplay.js (addEvent())
        openModify, // domDisplay.js (addEvent())
    }

})();

export default forms;