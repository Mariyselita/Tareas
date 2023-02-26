import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores/index';
import HomeView from '@/views/index.vue';
import Dices from "@/views/simulate-dices.vue";
import EquilateralTriangule from "@/views/equilateral-triangle.vue";

import { nextTick } from 'vue';

const routes: RouteRecordRaw[] = [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Tareas' } },
    {
        path: '/simulate-dices',
        name: 'simulate-dices',
        component: Dices,
        meta: { title: 'Simular dados' },
    },
    {
        path: '/equilateral-triangle',
        name: 'equilateral-triangle',
        component: EquilateralTriangule,
        meta: { title: 'Simular triángulo' },
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('../layouts/error.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash };
        }

        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.afterEach((to, from, next) => {
    const store = useAppStore();
    nextTick(() => {
        document.title = (to.meta.title || 'Plurk') as never;
    });
    store.toggleMainLoader(false);
});

export default router;
