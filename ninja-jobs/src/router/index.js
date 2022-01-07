import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/jobs',
		name: 'Jobs',
		component: () => import('../views/Jobs.vue')
	},
	{
		path: '/jobs/:id',
		name: 'JobDetails',
		component: () => import('../views/JobDetails.vue'),
		props: true
	},
	// redirect
	{
		path: '/all-jobs',
		redirect: '/jobs'
	},
	// catchall 404
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: () => import('../views/NotFound.vue')
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
