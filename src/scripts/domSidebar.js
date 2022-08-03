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
    const _renderProjectLink = function(id, title) {
        let liID = `#view-project_${id}`;
        let liProjectLink = li(title, liID);

        liProjectLink.addEventListener('click', (e) => {
            _openViewPreferenceQuery('project', e);
        });
        projectsList.appendChild(liProjectLink);
    }

    // helpers
    function _openViewPreferenceQuery(viewPreferenceType, event) {
        let targetReference = '';

        if (viewPreferenceType === 'today') {
            // get today's date (from date time api)
            // target reference = today's date
        } else if (viewPreferenceType === 'upcoming') {
            // get today's date (drom date time api)
            // add 7 days to date
            // target reference = today's date
        } else if (viewPreferenceType === 'project' || viewPreferenceType === 'tag') {
            let splitID = event.target.id.split('_');
            if (splitID.length > 2) {
                splitID.splice(0, 1);
                targetReference = splitID.join('_');
            } else {
                targetReference = splitID[1];
            };
        };

        events.publish('openViewPreferenceQuery', viewPreferenceType, targetReference); // subscribed by library.js
    }
    function _removeProjectLink(linkReference) {
        let liProject = document.getElementById(`view-${linkReference}`);
        let ulContainer = liProject.parentElement;

        ulContainer.removeChild(liProject);
    }

    // bind events
    viewAllButton.addEventListener('click', (e) => {
        _openViewPreferenceQuery('all', e);
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
        _openViewPreferenceQuery('project', e);
    });
    createProjectButton.addEventListener('click', () => {
        events.publish('clickCreateProject', 'project');    // subscribed by forms.js
    });
    events.subscribe('renderProjectLink', _renderProjectLink); // published by sidebar.js
    events.subscribe('itemModified', _updateViewPreferenceLink);   // published by library.js (_modifyTask())
    events.subscribe('removeProjectFromSection', _removeProjectLink);   // published by library.js (_deleteProject());

})();

export default domSidebar;