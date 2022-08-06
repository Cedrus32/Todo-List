import events from '../events.js';
import { default as li} from './elements';

// & manages sidebar section DOM <-> library communication
// & contains factories for generating display section DOM elements / groupings

const sidebar = (() => {
    // data

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
    
    viewAllButton.addEventListener('click', (e) => {
        _clickViewPreferenceLink('all', e);
    });
    viewTodayButton.addEventListener('click', () => {
        console.log('view tasks due today');
    });
    viewUpcomingButton.addEventListener('click', () => {
        console.log('view tasking due this week');
    });
    viewAnytimeButton.addEventListener('click', () => {
        console.log('view tasks with no due dates');
    });
    viewUnsortedButton.addEventListener('click', (e) => {
        _clickViewPreferenceLink('project', e);
    });
    createProjectButton.addEventListener('click', () => {
        events.publish('clickCreateProject', 'project');    // subscribed by forms.js
    });

    // managers
    function _clickViewPreferenceLink(viewPreference, event) {
        let queryReference;

        switch (viewPreference) {
            case 'today':
                // get today's date (from date time api)
                // target reference = today's date
                break;
            case 'upcoming':
                // get today's date (drom date time api)
                // add 7 days to date
                // target reference = today's date
                break;
            case 'project':
                let splitID = event.target.id.split('_');
                queryReference = splitID[1];
            //     break;
            // default:
            //     queryReference = '';
        };

        events.publish('openViewPreferenceQuery', viewPreference, queryReference); // subscribed by library.js
    }

    // factories
    const _renderProjectLink = function(project) {
        if (project.id !== 0) {
            let id = project.id;
            let title = project.title;

            let liID = `#view_${id}`;
            let liProjectLink = li(title, liID);

            liProjectLink.addEventListener('click', (e) => {
                _clickViewPreferenceLink('project', e);
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
        console.log(linkReference);

        let liProject = document.getElementById(`view_${linkReference}`);
        let ulContainer = liProject.parentElement;

        ulContainer.removeChild(liProject);
    }

    // event subscriptions
    
    events.subscribe('projectCreated', _renderProjectLink); // published by library.js (_createProject())
    events.subscribe('removeProjectFromSection', _removeProjectLink);   // published by library.js (_deleteProject());









    events.subscribe('itemModified', _modifyViewPreferenceLink);   // published by library.js (_modify...())

})();

export default sidebar;