import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

export default createStore({
    state : {
        count : 0
    },
    mutations: {
        increase(state, value){
            state.count += value;
        },
        decrease(state, value){
            state.count -= value;
        }
    },
    plugins : [ createPersistedState({
        paths: ["count"]
    }) ],
})