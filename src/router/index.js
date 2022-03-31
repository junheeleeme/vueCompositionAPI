import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/HomeComp'
import About from '../pages/AboutComp'
import Contact from '../pages/ContactComp'
import Portfolio from '../pages/PortfolioComp'
import Error from '../pages/ErrorComp'

const routes = [
    { path : '/', name : 'Home', component : Home },
    { path : '/about', name : 'About', component : About },
    { path : '/portfolio', name : 'Portfolio', component : Portfolio },
    { path : '/contact', name : 'Contact', component : Contact, props : true },
    { path : '/404', name : 'Not-Found', component : Error },
    { path: '/:pathMatch(.*)*', redirect : '/404' }
]

const router = createRouter({
    history : createWebHistory(), routes
})

export default router;