import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/HomeComp'
import Fetch from '../pages/FetchComp'
import Vuex from '../pages/VuexComp'
import Router from '../pages/RouterComp'
import Error from '../pages/ErrorComp'
import Detail from '../pages/DetailComp'

const routes = [
    { path : '/', name : 'Home', component : Home },
    { path : '/fetch', name : 'Fetch', component : Fetch },
    { path : '/detail/:id', name : 'Detail', component : Detail },
    { path : '/vuex', name : 'Vuex', component : Vuex },
    { path : '/router', name : 'Router', component : Router },
    { path : '/router/:id', name : 'RouterParams', component : Router },
    { path : '/404', name : 'Not-Found', component : Error },
    { path: '/:pathMatch(.*)*', redirect : '/404' }
]

const router = createRouter({
    history : createWebHistory(), routes
})

export default router;