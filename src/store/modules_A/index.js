/**
 * Created by zhangwei36 on 2017/7/25.
 */
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
const state={
    // 用count来记录id
    count:1,
    // 记事本数据
    todoListData:[],
}
export default {
    state,
    getters,
    mutations,
    actions
}