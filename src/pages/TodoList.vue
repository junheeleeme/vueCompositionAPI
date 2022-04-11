<template>
    <div class="todo-wrap">
        <div class="todo-input-wrap">
            <input ref="todoInput" class="todo-input" type="text" @input="changeInput" @keydown.enter="clickAdd"/>
            <button class="todo-btn" @click="clickAdd">추가</button>
        </div>
        
        <ul class="todo-list">
            <li v-for="(todo, index) in todos" :key="todo.id">
                {{todo.todo}}
                <button @click="clickRemove" class="todo-remove" :data-value="index">X</button>    
            </li>
        </ul>
    </div>
</template>
<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name : 'TodoList',
    setup(){
        const store = useStore();
        const todos = computed(()=> store.state.todos );
        const todoTxt = ref('');
        const todoInput = ref(null);

        const insertTodo = (todo) => store.commit('insertTodo', todo);
        const removeTodo = (index) => store.commit('removeTodo', index);

        const changeInput = (e) => {
            todoTxt.value = e.target.value.trim();
        }

        const clickAdd = () => {
            console.log(todoInput)
            const todo = {
                id: todos.value.length,
                todo : todoTxt.value
            }
            insertTodo(todo);
            todoInput.value.value = '';
            todoTxt.value = '';
        }
        const clickRemove = (e) => {
            const idx = e.target.dataset.value;
            removeTodo(idx);
        }


        return{ 
            todos,
            changeInput,
            clickAdd,
            todoInput,
            clickRemove
        }
    }
}
</script>
<style>
.todo-wrap{
    max-width: 550px;
    margin: 0 auto;
}
.todo-input-wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.todo-input{
    width: 100%;
    outline: 0;
    border: none;
    background: rgb(216, 234, 255);
    color: rgb(43, 43, 43);
    font-size: 1.25rem;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    margin-right: 1rem;
}
.todo-btn{
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(0, 140, 255);
    border: none;
    color: #fff;
    font-size: 1.25rem;
    padding: 0.25rem;
    cursor: pointer;
    border-radius: 5px;
}
.todo-list{
    padding: 1rem 0;
}
.todo-list>li{
    position: relative;;
    font-size: 1.2rem;
    padding: 0.5rem 0 0.25rem 1rem;
    border-bottom: 1px solid rgb(212, 212, 212);
}
.todo-list>li::after{
    content: '';
    position: absolute;
    top: 50%; left: 3px;
    transform: translate(0, -50%);
    width: 5px; height: 5px;
    background: #000;
    border-radius: 2.5px;
}
.todo-remove{
    position: absolute;
    top: 0; right: 0;
    height: 100%;
    cursor: pointer;
    border: none;
    background: none;
}
</style>