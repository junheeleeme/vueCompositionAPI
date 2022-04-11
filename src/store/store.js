import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

 export const store = createStore({
    state : {
        count : 0,
        todos : [
            {
                // id: 0,
                // todo : '집가기'
            },
        ]
    },
    mutations: {
        increase(state, value){
            state.count += value;
        },
        decrease(state, value){
            state.count -= value;
        },
        insertTodo(state, todo){
            state.todos.push(todo);
        },
        removeTodo(state, index){
            state.todos.splice(index, 1);
        }
    },
    plugins : [ createPersistedState({
        paths: ["count", "todos"]
    }) ],
})
