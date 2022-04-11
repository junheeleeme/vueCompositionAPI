import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

 const store = createStore({
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

export const todoStore = createStore({
    state : {
        todos : [
            {
                // id: 0,
                // todo : '집가기'
            },
        ]
    },
    mutations: {
        insertTodo(state, todo){
            state.todos.push(todo);
        },
        removeTodo(state, index){
            state.todos.splice(index, 1);
        }
    },
    plugins : [ createPersistedState({
        paths: ["todos"]
    }) ],
})

export default store