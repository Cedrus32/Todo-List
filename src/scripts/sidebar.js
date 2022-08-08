import events from '../events.js';
import { default as li} from './elements';

// & manages sidebar section DOM <-> library communication
// & contains factories for generating display section DOM elements / groupings

const sidebar = (() => {
    // cache dom
    let viewPrefs = document.getElementById('sidebar');
    let title = document.getElementById('title');

    let viewAllButton = document.getElementById('view-all');
    let viewTodayButton = document.getElementById('view-today');
    let viewUpcomingButton = document.getElementById('view-upcoming');
    let viewAnytimeButton = document.getElementById('view-anytime');
    let viewUnsortedButton = document.getElementById('view-project_0');
    let projectsList = document.getElementById('dynamic-views');
    let createProjectButton = document.querySelector('div.view-prefs-container span.create');

    // event listeners
    // ? hide sidebar when not focused ?
    title.addEventListener('click', () => {
        viewPrefs.classList.toggle('hide');
    });
    
    viewAllButton.addEventListener('click', () => {
        _changeViewPreference('all', '');
    });
    viewTodayButton.addEventListener('click', () => {
        _changeViewPreference('today', '');
    });
    viewUpcomingButton.addEventListener('click', () => {
        _changeViewPreference('upcoming', '');
    });
    viewAnytimeButton.addEventListener('click', () => {
        _changeViewPreference('anytime', '');
    });
    viewUnsortedButton.addEventListener('click', (e) => {
        _changeViewPreference('project', e.target.id);
    });
    createProjectButton.addEventListener('click', () => {
        events.publish('clickCreateProject', 'project');    // subscribed by forms.js
    });

    // managers
    function _changeViewPreference(preferenceKeyword, targetID) {
        console.log(targetID);
        let queryReference;

        switch (preferenceKeyword) {
            case 'today':
                queryReference = _getTodayDate();
                break;
            case 'upcoming':
                queryReference = _getUpcomingDate();
                break;
            case 'project':
                let splitID = targetID.split('_');
                queryReference = splitID[1];
                break;
            default:
                queryReference = '';
        };

        events.publish('openViewPreferenceQuery', preferenceKeyword, queryReference); // subscribed by library.js
    }

    // factories
    const _renderProjectLink = function(project) {
        if (project.id !== 0) {
            let id = project.id;
            let title = project.title;

            let liID = `#view-project_${id}`;
            let liProjectLink = li(title, liID);

            liProjectLink.addEventListener('click', (e) => {
                _changeViewPreference('project', e.target.id);
            });

            projectsList.appendChild(liProjectLink);
        };
    }

    // helpers
    function _modifyViewPreferenceLink(itemInstance) {
        if (itemInstance.type === 'project') {
            let projectLink = document.getElementById(`view-project_${itemInstance.id}`);
            projectLink.textContent = itemInstance.title;
        };
    }
    function _removeProjectLink(projectCardID) {
        let linkReference = projectCardID.split('_')[1];

        let liProject = document.getElementById(`view-project_${linkReference}`);
        let ulContainer = liProject.parentElement;

        ulContainer.removeChild(liProject);

        switch (true) {
            case (ulContainer.children.length > 1):
                _changeViewPreference('project', ulContainer.lastChild.id);
                break;
            default:
                _changeViewPreference('project', 'project_0');
        };
    }
    function _getTodayDate() {  // ! reduce repetition vvv
        let rawDate = new Date();
        let year = rawDate.getFullYear();
        let month = rawDate.getMonth() + 1;
        let date = rawDate.getDate();

        if (month < 10) {
            month = `0${month}`;
        };
        if (date < 10) {
            date = `0${date}`;
        };

        let formattedDate = `${year}-${month}-${date}`;
        return formattedDate;
    }
    function _getUpcomingDate() {   // ! reduce repetition ^^^
        let validDates = [];
        for (let i = 1; i < 8; i++) {
            let rawDate = new Date();
            rawDate.setDate(rawDate.getDate() + i);
            let year = rawDate.getFullYear();
            let month = rawDate.getMonth() + 1;
            let date = rawDate.getDate();
     
            if (month < 10) {
                 month = `0${month}`;
             };
             if (date < 10) {
                 date = `0${date}`;
             };
     
             let formattedDate = `${year}-${month}-${date}`;
             validDates.push(formattedDate);
        };

        return validDates;
    }

    // event subscriptions
    
    events.subscribe('projectCreated', _renderProjectLink); // published by library.js (_createProject())
    events.subscribe('itemModified', _modifyViewPreferenceLink);   // published by library.js (_modify...())
    events.subscribe('removeProjectFromSection', _removeProjectLink);   // published by library.js (_deleteProject());

})();

export default sidebar;