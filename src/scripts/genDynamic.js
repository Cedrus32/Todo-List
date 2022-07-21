import forms from './forms';
import library from './library';
import option from './elements';

const genDyn = (() => {

    function genProjOptions() {
        let _projectDropdown = forms.getProjDropdown();
        let projData = [...library.getProjOptionData()];
        for (let d in projData) {
            console.log(projData[d][0]);
            console.log(projData[d][1]);
            let _optionProj = option(projData[d][0], projData[d][1]);
            _projectDropdown.appendChild(_optionProj);
        };
    };

    return {
        genProjOptions, // index.js
    }

})();

export default genDyn;