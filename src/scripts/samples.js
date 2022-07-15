import library from './library';

const samples = (() => {
    // data
    let _taskSamples = [['unsorted', 'singleton', 'Task 1', 'this is a sample task', '01/01/01', 3, '#tag'],
                        ['unsorted', 'singleton', 'Task 2', 'this is #2', '02/02/02', 2, ''],
                        ['unsorted', 'checklist', 'Task 3', 'this is a checklist', '03/03/03', 1, '#tig #tog'],
                       ];

    // methods
    function addSamples() {
        for (let item in _taskSamples) {
            library.createTask(_taskSamples[item]);
        }
    }

    return {
        addSamples,
    }

})();

export default samples;