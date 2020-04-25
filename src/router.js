import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import RestHome from '../views/RestHome.vue'
import Admin from '../views/Admin.vue'
import GetOne from './components/GetOne'
import Search from './components/Search'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { 
            path: '/',
            name: "home",
            component: Home
        },
        {
            path: '/rest-home',
            name: "rest-home",
            component: RestHome
        },
        {
            path: '/get-one',
            name: "get-one",
            component: GetOne
        },
        {
            path: '/search',
            name: "search",
            component: Search
        },
        {
            path: '/admin',
            name: "admin",
            component: Admin
        }
    ]
})