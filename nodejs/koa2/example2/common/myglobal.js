const path = require('path');


let myPath = {
    'ROOT_PATH':{
        value: path.resolve(__dirname, '../'),
        writable: false,
    },
    'COMMON_PATH':{
        value: __dirname,
        writable: false,
    },
    'CONTROLLER_PATH':{
        value: path.resolve(__dirname, '../', 'controller'),
        writable: false,
    },
};
//将常用路径挂载到全局
Object.defineProperties(global,myPath);