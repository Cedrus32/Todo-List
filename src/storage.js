import events from './events';

const storage = (() => {
    function storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }
    function check() {
        let loadLocal;
        let loadDefault;
        if (storageAvailable('localStorage')) {
            console.log(localStorage.length);
            if (localStorage.length === undefined) {
                loadLocal = false;
                loadDefault = true;
            } else {
                // loadLocal = true;
                // loadDefault = false;
                loadLocal = false;
                loadDefault = true;
            };
        } else {
            // throws error per storageAvailable()
        };

          events.publish('storageCheckComplete', loadLocal, loadDefault);    // subscribed by default.js
    }

    return {
        check,   // used by index.js
    }

})();

export default storage;