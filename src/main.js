import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'github-markdown-css'

Vue.config.productionTip = false

import Menu from './components/Menu.vue'

Vue.component('Menu', Menu);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')