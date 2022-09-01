import { createRouter, createWebHashHistory } from 'vue-router'

import Main from './components/Main-page.vue'
import Welcome from './components/welcome-page.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/welcome',
            name: 'welcome',
            component: Welcome
        }
    ]
})