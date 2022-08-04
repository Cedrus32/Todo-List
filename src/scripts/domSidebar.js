import events from '../events.js';
import { default as li} from './elements';

// * factory module for sidebar DOM groupings

const domSidebar = (() => {
    // data

    // cache dom
    let viewAllButton = document.getElementById('view-all');
    let viewTodayButton = document.getElementById('view-today');
    let viewUpcomingButton = document.getElementById('view-upcoming');
    let viewAnytimeButton = document.getElementById('view-anytime');
    let viewUnsortedButton = document.getElementById('view-project_0');
    let projectsList = document.getElementById('dynamic-views');
    let createProjectButton = document.querySelector('div.view-prefs-container span.create');

    // managers
    function _updateViewPreferenceLink(itemInstance) {
        if (itemInstance.type === 'project') {
            let projectLink = document.getElementById(`view-project_${itemInstance.id}`);
            projectLink.textContent = itemInstance.title;
        } else if (itemInstance.type === 'singleton' || itemInstance.type === 'checklist') {
            console.log('update tag link');
            // delete any tags without tallies (set up tag tally library)
            // loop through existing links, add any that do not exist // ? (use _renderTagLink())
        };
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
    function _clickViewPreferenceLink(viewPreference, event) {
        let queryReference = '';

        if (viewPreference === 'all') {

        } else if (viewPreference === 'today') {
            // get today's date (from date time api)
            // target reference = today's date
        } else if (viewPreference === 'upcoming') {
            // get today's date (drom date time api)
            // add 7 days to date
            // target reference = today's date
        } else if (viewPreference === 'anytime'){

        } else if (viewPreference === 'project') {
            let splitID = event.target.id.split('_');
            queryReference = splitID[1];
        };

        events.publish('openViewPreferenceQuery', viewPreference, queryReference); // subscribed by library.js
    }
    function _removeProjectLink(linkReference) {
        let liProject = document.getElementById(`view-${linkReference}`);
        let ulContainer = liProject.parentElement;

        ulContainer.removeChild(liProject);
    }

    // bind events
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
    events.subscribe('projectCreated', _renderProjectLink); // published by sidebar.js
    events.subscribe('itemModified', _updateViewPreferenceLink);   // published by library.js (_modifyTask())
    events.subscribe('removeProjectFromSection', _removeProjectLink);   // published by library.js (_deleteProject());

})();

export default domSidebar;