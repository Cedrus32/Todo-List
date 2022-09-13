import events from './events';

const localStorage = (() => {
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
            // set way to check if localStorage has PREVIOUSLY been accessed (load from localStorage) ...
            // ... OR if localStorage has NOT been accessed (load from default.js)
            console.log(Storage.length);
            if (Storage.length === 0) {
                loadLocal = false;
                loadDefault = true;
            } else {
                loadLocal = true;
                loadDefault = false;
            };
          } else {
            // throws error per storageAvailable()
          };

          events.publish('storageCheckComplete', loadLocal, loadDefault);    // subscribed by default.js
    }

    // quality control
    function clearLocal() {
        Storage.clear;
    }

    return {
        check,   // used by index.js
        clearLocal, // used ...
    }

})();

export default localStorage;