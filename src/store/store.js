import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import { createStore } from "vuex";

const ls = new SecureLS({
    encodingType : "aes",
    isCompression : false,
    encryptionSecret : '123'
})

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
}

export const store = createStore({
    modules:{
        countStore,
        todosStore
    },
    plugins : [ createPersistedState({
        key: 'data',
        storage: {
            getItem: (key) => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: (key) => ls.remove(key),
        },
        paths: ["countStore", "todosStore"]
    })],
})
