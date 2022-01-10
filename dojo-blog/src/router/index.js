import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/posts/:id',
		name: 'Details',
		component: () => import('../views/Details.vue'),
		props: true
	},
	{
		path: '/create',
		name: 'Create',
		component: () => import('../views/Create.vue'),
		props: true
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
