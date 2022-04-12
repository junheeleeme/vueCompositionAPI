import createPersistedState from "vuex-persistedstate";
import { createStore } from "vuex";

const countStore = {
    state: {
        count : 0,
    },
    mutations: {
        increase(state, value){
            state.count += value;
        },
        decrease(state, value){
            state.count -= value;
        },
    },
    // plugins : [ createPersistedState({
    //     paths: ["count"]
    // }) ],
}

const todosStore = {
    state :{
        todos : [
            // {
            //     id: 0,
            //     todo : '집가기'
            // },
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
    // plugins : [ createPersistedState({
    //     paths: ["todos"]
    // }) ],
}

export const store = createStore({
    modules:{
        countStore,
        todosStore
    },
    plugins : [ createPersistedState({
        paths: ["countStore", "todosStore"]
    })],
})
