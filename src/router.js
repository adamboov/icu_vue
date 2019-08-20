import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/zh_CN',
            name: 'zh_CN',
            component: () =>
                import ('./views/Zh_CN.vue')
        },
        {
            path: '/de_DE',
            name: 'de_DE',
            component: () =>
                import ('./views/De_DE.vue')
        },
        {
            path: '/es_MX',
            name: 'es_MX',
            component: () =>
                import ('./views/Es_MX.vue')
        },
        {
            path: '/en_US',
            name: 'en_US',
            component: () =>
                import ('./views/En_US.vue')
        },
        {
            path: '/*',
            redirect: '/zh_CN'
        }
    ],
    base: '/icu'
})