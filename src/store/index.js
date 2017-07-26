import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import modules_A from './modules_A'
import modules_B from './modules_B'

export default new Vuex.Store({
    modules: {
        modules_A,
        modules_B
    }
});