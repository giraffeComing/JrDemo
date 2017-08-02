/**
 * Created by zhangwei36 on 2017/7/25.
 */
export default {
    getToDo(states){
        return states.todoListData.filter(function (d) {
            if (d.type === 1) {
                return d;
            }
        });
    },
    getDone(states){
        return states.todoListData.filter(function (d) {
            if (d.type === 2) {
                return d;
            }
        });
    },
    getCancel(states){
        return states.todoListData.filter(function (d) {
            if (d.type === 3) {
                return d;
            }
        });
    },
};