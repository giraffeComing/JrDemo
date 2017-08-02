/**
 * Created by zhangwei36 on 2017/7/25.
 */
// 导入常量
import * as type from './mutations_types.js';

export default {
    [type.ADDEVENT](state,param){
        state.todoListData.unshift(param);
    },
    [type.DONEEVENT](state,param){

        for (let i = 0; i < state.todoListData.length; i++) {
            if (state.todoListData[i].id === param) {
                state.todoListData[i].type = 2;
                var item = state.todoListData[i];
                state.todoListData.splice(i, 1);
                break;
            }
        }
        state.todoListData.unshift(item);
    },
    [type.CANCELEVENT](state,param){
        for (let i = 0; i < state.todoListData.length; i++) {
            if (state.todoListData[i].id === param) {
                state.todoListData[i].type = 3;
                var item = state.todoListData[i];
                state.todoListData.splice(i, 1);
                break;
            }
        }
        state.todoListData.unshift(item);
    },
    [type.DELETEEVENT](state,id){
        for (let i = 0; i < state.todoListData.length; i++) {
            if (state.todoListData[i].id === id) {
                state.todoListData.splice(i, 1);
                break;
            }
        }
    },
}