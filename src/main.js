import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'github-markdown-css'

Vue.config.productionTip = false

import Menu from './components/Menu.vue'
import Star from './components/Star.vue'
import Logo from './components/Logo.vue'

Vue.component('Menu', Menu);
Vue.component('Star', Star)
Vue.component('Logo', Logo)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')