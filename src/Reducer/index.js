import addNumber from './Example/Add/addReducer';
import tableModalVisible from './Example/TableExample/tableModalVisible';
import tableAddPersonInfo from './Example/TableExample/tableAddPersonInfo';
import removeData from './Example/TableExample/removeDataReducer';
import hahaha from './Example/Test/testReducer';
import async from './Example/Async/AsyncReducer';

const reducerObj = {
    addNumber,
    tableModalVisible,
    tableAddPersonInfo,
    removeData,
    ...hahaha,
    async,
}

export default reducerObj;
