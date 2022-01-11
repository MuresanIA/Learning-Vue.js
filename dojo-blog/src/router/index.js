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
	},
	{
		path: '/tags/:tag',
		name: 'Tag',
		component: () => import('../views/Tag.vue'),
		props: true
	},
	{
		path: '/realtime',
		name: 'RealTime',
		component: () => import('../views/RealTime.vue'),
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
