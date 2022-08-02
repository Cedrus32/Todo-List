import events from '../events.js';
import { default as li} from './elements';

// * factory module for sidebar DOM groupings

const domSidebar = (() => {
    // data

    // cache dom
    let staticList = document.getElementById('static-views');
    let tagsList = document.getElementById('dynamic-views-tags');
    let projectsList = document.getElementById('dynamic-views-projects');
    let projectCreateButton = document.querySelector('div.view-prefs-container span.create');

    console.log(staticList);
    console.log(tagsList);
    console.log(projectsList);
    console.log(projectCreateButton);

    // managers
    const _renderProjectLink = function(id, title) {
        let liID = `#view-project_${id}`;
        let liProjectLink = li(title, liID);

        liProjectLink.addEventListener('click', (e) => {
            console.log('view project in display');
            console.log(e.target.id);
        });

        projectsList.appendChild(liProjectLink);
    }

    // helpers

    // bind events
    projectCreateButton.addEventListener('click', () => {
        console.log('show blank project form');
    })
    events.subscribe('renderProjectLink', _renderProjectLink); // published by sidebar.js

})();

export default domSidebar;