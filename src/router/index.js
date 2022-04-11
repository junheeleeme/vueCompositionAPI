import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/HomeComp'
import Fetch from '../pages/FetchComp'
import Vuex from '../pages/VuexComp'
import Router from '../pages/RouterComp'
import Error from '../pages/ErrorComp'
import Detail from '../pages/DetailComp'
import TodoList from '../pages/TodoList'

const routes = [
    { path : '/', name : 'Home', component : Home },
    { path : '/fetch', name : 'Fetch', component : Fetch },
    { path : '/detail/:id', name : 'Detail', component : Detail },
    { path : '/vuex', name : 'Vuex', component : Vuex },
    { path : '/router', name : 'Router', component : Router },
    { path : '/todolist', name : 'TodoList', component : TodoList },
    { path : '/404', name : 'Not-Found', component : Error },
    { path: '/:pathMatch(.*)*', redirect : '/404' }
]

export const menu = [
    { id : 0, path : '/', name : 'Home' },
    { id : 1, path : '/fetch', name : 'Fetch' },
    { id : 2, path : '/vuex', name : 'Vuex' },
    { id : 3, path : '/router?page=1', name : 'Router' },
    { id : 4, path : '/todolist', name : 'TodoList' },
]

const router = createRouter({
    history : createWebHistory(), routes
})

export default router;