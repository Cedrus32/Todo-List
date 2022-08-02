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
    let tagsList = document.getElementById('dynamic-views-tags');
    let projectsList = document.getElementById('dynamic-views-projects');
    let createProjectButton = document.querySelector('div.view-prefs-container span.create');

    // managers
    const _renderProjectLink = function(id, title) {
        let liID = `#view-project_${id}`;
        let liProjectLink = li(title, liID);

        liProjectLink.addEventListener('click', (e) => {
            _openViewPreferenceQuery('project', e);
        });
        projectsList.appendChild(liProjectLink);
    }
    const _renderTagLink = function(task) {
        let tagsArray = task.tags;
        let numberTagLinks = tagsList.children.length
        for (let i = 0; i < (tagsArray.length); i++) {
            let tagName = tagsArray[i];
            let liID = `view-tag_${tagName}`;

            let tagElementList = [];
            for (let n = 0; n < (numberTagLinks); n++) {
                tagElementList.push(tagsList.children[n].id);
            };

            if (!tagElementList.some(id => id === liID)) {
                let liTagLink = li(tagName, `#${liID}`);
                    liTagLink.addEventListener('click', (e) => {
                        _openViewPreferenceQuery('tag', e);
                    });
                    tagsList.appendChild(liTagLink);
            };
        };
    }

    // helpers
    function _openViewPreferenceQuery(viewPreferenceType, event) {
        let splitID = event.target.id.split('_');
        let targetReference = '';
        if (splitID.length > 2) {
            splitID.splice(0, 1);
            targetReference = splitID.join('_');
        } else {
            targetReference = splitID[1];
        };
        events.publish('openViewPreferenceQuery', viewPreferenceType, targetReference); // subscribed by library.js
    }

    // bind events
    // viewAllButton.addEventListener('click', () => {
    //     console.log('view all tasks');
    // });
    // viewTodayButton.addEventListener('click', () => {
    //     console.log('view tasks due today');
    // });
    // viewUpcomingButton.addEventListener('click', () => {
    //     console.log('view tasking due this week');
    // });
    // viewAnytimeButton.addEventListener('click', () => {
    //     console.log('view tasks with no due dates');
    // });
    viewUnsortedButton.addEventListener('click', (e) => {
        _openViewPreferenceQuery('project', e);
    });
    createProjectButton.addEventListener('click', () => {
        events.publish('clickCreateProject', 'project');    // subscribed by forms.js
    });
    events.subscribe('renderProjectLink', _renderProjectLink); // published by sidebar.js
    events.subscribe('renderTagLink', _renderTagLink);  // published by sidebar.js
    events.subscribe('itemModified', _renderTagLink);   // published by library.js (_modifyTask())

})();

export default domSidebar;