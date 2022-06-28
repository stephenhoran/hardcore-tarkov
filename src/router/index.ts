import {createRouter, createWebHistory} from 'vue-router'
import Leaderboard from '@/views/LeaderboardView.vue'
import Rules from '@/views/RulesView.vue'
import Authorize from '@/views/AuthorizeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Leaderboard
        },
        {
            path: '/rules',
            name: 'rules',
            component: Rules
        },
        {
            path: '/authorize',
            name: 'authorize',
            component: Authorize
        }
    ]
})

export default router
