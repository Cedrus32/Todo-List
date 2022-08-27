import events from '../events.js';
import { span, li, img } from './elements';

// & manages sidebar section DOM <-> library communication
// & contains factories for generating display section DOM elements / groupings

const sidebar = (() => {
    // cache dom
    let title = document.getElementById('title');
    let sidebar = document.getElementById('sidebar');

    let viewAllButton = document.getElementById('view-all');
    let viewTodayButton = document.getElementById('view-today');
    let viewUpcomingButton = document.getElementById('view-upcoming');
    let viewAnytimeButton = document.getElementById('view-anytime');
    let viewUnsortedButton = document.getElementById('view-project_0');
    let projectsList = document.getElementById('dynamic-views');
    let createProjectButton = document.querySelector('#dynamic-views .create');
    console.log(createProjectButton);

    // event listeners
    // ? hide sidebar when not focused ?
    title.addEventListener('click', () => {
        let isSmallScreen = _checkMediaQuery();
        console.log(isSmallScreen);
        if (isSmallScreen) {
            _toggleSidebarVisibility();
        };
    });
    
    viewAllButton.addEventListener('click', (e) => {
        let sidebarLink = e.target.closest('li');
        _updateSelectEffect(sidebarLink);
        _changeViewPreference('All', '');
    });
    viewTodayButton.addEventListener('click', (e) => {
        let sidebarLink = e.target.closest('li');
        _updateSelectEffect(sidebarLink);
        _changeViewPreference('Today', '');
    });
    viewUpcomingButton.addEventListener('click', (e) => {
        let sidebarLink = e.target.closest('li');
        _updateSelectEffect(sidebarLink);
        _changeViewPreference('Upcoming', '');
    });
    viewAnytimeButton.addEventListener('click', (e) => {
        let sidebarLink = e.target.closest('li');
        _updateSelectEffect(sidebarLink);
        _changeViewPreference('Anytime', '');
    });
    viewUnsortedButton.addEventListener('click', (e) => {
        let sidebarLink = e.target.closest('li');
        _updateSelectEffect(sidebarLink);
        _changeViewPreference('project', viewUnsortedButton.id);
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
    function _setSidebarVisibility(width) {
        console.log(width);
        switch (true) {
            case (width < 600):
                if (sidebar.classList.contains('full-view')) {
                    sidebar.classList = '';
                };
                sidebar.classList.add('compact-view');
                sidebar.classList.add('hide-sidebar');
                break;
            case (width >= 600):
                if (sidebar.classList.contains('compact-view')) {
                    sidebar.classList = '';
                };
                sidebar.classList.add('full-view')
                sidebar.classList.add('show-sidebar');
        };
        console.log(sidebar.classList);
    }
    function _toggleSidebarVisibility() {
        console.log('enter _toggleSidebarVisibility');
        console.log(sidebar.classList);
        switch (true) {
            case (sidebar.classList.contains('hide-sidebar')):
                sidebar.classList.remove('hide-sidebar');
                sidebar.classList.add('show-sidebar');
                break;
            case (sidebar.classList.contains('show-sidebar')):
                sidebar.classList.remove('show-sidebar');
                sidebar.classList.add('hide-sidebar');
        };
    }

    // factories
    const _renderProjectLink = function(project) {
        if (project.id !== 0) {
            let id = project.id;
            let title = project.title;

            let liID = `#view-project_${id}`;
            let liProjectLink = li('', liID);
            let projectIcon = _renderProjectIcon(project.icon);
            let projectSpan = span(title, '');
            liProjectLink.append(projectIcon, projectSpan);
            
            console.log(liProjectLink);

            liProjectLink.addEventListener('click', (e) => {
                _updateSelectEffect(e);
                _changeViewPreference('project', e.target.id);
            });

            projectsList.appendChild(liProjectLink);
            
            _updateSelectEffect(liProjectLink);
        };
    }
    const _renderProjectIcon = function(iconReference) {
        let iconAlt;
            switch (iconReference) {
                case '00':
                    iconAlt = 'folder';
                    break;
                case '01':
                    iconAlt = 'star';
                    break;
                case '02':
                    iconAlt = 'hammer and wrench';
                    break;
                case '03':
                    iconAlt = 'fork and soda cup';
                    break;
                case '04':
                    iconAlt = 'dollar bills';
                    break;
                case '05':
                    iconAlt = 'city buildings';
                    break;
                case '06':
                    iconAlt = 'house';
                    break;
                case '07':
                    iconAlt = 'gift';
                    break;
                case '08':
                    iconAlt = 'car';
                    break;
                case '09':
                    iconAlt = 'airplane';
                    break;
                case '10':
                    iconAlt = 'baby carriage';
                    break;
                case '11':
                    iconAlt = 'flower';
                    break;
                case '12':
                    iconAlt = 'palm tree';
                    break;
                case '13':
                    iconAlt = 'volley ball';
                    break;
                case '14':
                    iconAlt = 'backpack';
            };
            let icon = img(`src/icons/project-icons/${iconReference}.svg`, iconAlt, '');

            return icon;
    }

    // helpers
    function _modifyViewPreferenceLink(itemInstance) {
        if (itemInstance.type === 'project') {
            let projectLink = document.getElementById(`view-project_${itemInstance.id}`);

            projectLink.textContent = '';
            let projectIcon = _renderProjectIcon(itemInstance.icon);
            let projectSpan = span(itemInstance.title, '');
            projectLink.append(projectIcon, projectSpan);
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
                _updateSelectEffect(ulContainer.lastChild);
                break;
            default:
                _changeViewPreference('project', 'project_0');
                _updateSelectEffect(viewUnsortedButton);
        };
    }
    function _getTodayDate() {
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
    function _getUpcomingDate() {
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
    function _updateSelectEffect(targetLink) {
        _removeSelectEffect();
        _addSelectEffect(targetLink);
    }
    function _addSelectEffect(targetLink) {
        targetLink.classList.add('selected-view-preference');
    }
    function _removeSelectEffect() {
        let sidebarLinks = [viewAllButton, viewTodayButton, viewUpcomingButton, viewAnytimeButton, viewUnsortedButton, ...projectsList.children];
        sidebarLinks.splice(5, 1);
        console.log(sidebarLinks);

        for (let i = 0; i < (sidebarLinks.length); i++) {
            let viewPreference = sidebarLinks[i];
            if (viewPreference.classList.contains('selected-view-preference')) {
                viewPreference.classList.remove('selected-view-preference');
            };
        };
    }
    function _checkMediaQuery() {
        let windowSize = window.innerWidth;
        console.log(windowSize);
        if (windowSize < 600) {
            return true;
        };
    }

    // event subscriptions
    
    events.subscribe('projectCreated', _renderProjectLink); // published by library.js (_createProject())
    events.subscribe('itemModified', _modifyViewPreferenceLink);   // published by library.js (_modify...())
    events.subscribe('removeProjectFromSection', _removeProjectLink);   // published by library.js (_deleteProject());

    events.subscribe('initializeDefaultLayout', _setSidebarVisibility); // published by default.js
    events.subscribe('windowResize', _setSidebarVisibility);    // published by default.js

})();

export default sidebar;