import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/orders',
			name: 'Orders',
			component: () => import('../views/Orders.vue')
		},
		{
			path: '/contact',
			name: 'Contact',
			component: () => import('../views/Contact.vue')
		}
	]
})

export default router
