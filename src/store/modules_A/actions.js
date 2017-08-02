/**
 * Created by zhangwei36 on 2017/7/25.
 */
export default {

    addevent({commit,state}, param){
        commit('ADDEVENT', {item: param,type: 1,id: state.count++})
    },
    doneevent({commit}, id){
        commit('DONEEVENT', id)
    },
    cancelevent({commit}, id){
        commit('CANCELEVENT', id)
    }


}