import addNumber from './Example/Add/addReducer';
import tableModalVisible from './Example/TableExample/tableModalVisible';
import tableAddPersonInfo from './Example/TableExample/tableAddPersonInfo';
import removeData from './Example/TableExample/removeDataReducer';
import hahaha from './Example/Test/testReducer';

const reducerObj = {
    addNumber,
    tableModalVisible,
    tableAddPersonInfo,
    removeData,
    ...hahaha,
}

export default reducerObj;
