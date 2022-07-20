import forms from './forms';
import library from './library';
import create from './domBase';

const genDyn = (() => {

    function genProjOptions() {
        let _projectDropdown = forms.getProjDropdown();
        let projData = [...library.getProjOptionData()];
        for (let d in projData) {
            let _optionProj = create.option(projData[d][0], projData[d][1]);
            _projectDropdown.appendChild(_optionProj);
        };
    };

    return {
        genProjOptions, // index.js
    }

})();

export default genDyn;