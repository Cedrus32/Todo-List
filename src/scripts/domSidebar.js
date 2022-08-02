import events from '../events.js';
import { default as li} from './elements';

// * factory module for sidebar DOM groupings

const domSidebar = (() => {
    // data

    // cache dom
    let staticList = document.getElementById('static-views');
    let tagsList = document.getElementById('dynamic-views-tags');
    let projectsList = document.getElementById('dynamic-views-projects');
    let createProjectButton = document.querySelector('div.view-prefs-container span.create');

    console.log(staticList);
    console.log(tagsList);
    console.log(projectsList);
    console.log(createProjectButton);

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
    const _renderTagLink = function(task) {
        let tagsArray = task.tags;
        let numberTagLinks = tagsList.children.length
        console.log(tagsList.children);
        console.log(numberTagLinks);

        for (let i = 0; i < (tagsArray.length); i++) {
            let tagName = tagsArray[i];
            let liID = `view-tag_${tagName}`;

            let tagElementList = [];
            for (let n = 0; n < (numberTagLinks); n++) {
                tagElementList.push(tagsList.children[n].id);
            };
            console.log(liID);
            console.log(tagElementList);

            if (!tagElementList.some(id => id === liID)) {
                console.log('tag unique, create li');
                let liTagLink = li(tagName, `#${liID}`);
                    liTagLink.addEventListener('click', (e) => {
                        console.log('view tag in display');
                        console.log(e.target.id);
                    });

                    console.log(liTagLink);
                    
                    tagsList.appendChild(liTagLink);
            };
        };
    }

    // helpers

    // bind events
    createProjectButton.addEventListener('click', () => {
        console.log('show blank project form');
        // ^ show blank project form on click
        events.publish('clickCreateProject', 'project');
    });
    events.subscribe('renderProjectLink', _renderProjectLink); // published by sidebar.js
    events.subscribe('renderTagLink', _renderTagLink);  // published by sidebar.js
    events.subscribe('itemModified', _renderTagLink);   // published by library.js (_modifyTask())

})();

export default domSidebar;