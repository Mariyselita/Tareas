import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores/index';
import HomeView from '@/views/index.vue';
import Dices from '@/views/Proba/simulate-dices.vue';
import EquilateralTriangule from '@/views/Proba/equilateral-triangle.vue';
import BayesianClassifier from '@/views/Proba/bayesian-classifier.vue';
import Kurtosis from '@/views/Proba/kurtosis.vue';
import Trenza from '@/views/Proba/trenza-dorada.vue';
import Pares from '@/views/Proba/pares.vue';
import Chi from '@/views/Proba/chi.vue';

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
        path: '/bayesian-classifier',
        name: 'bayesian-classifier',
        component: BayesianClassifier,
        meta: { title: 'Clasificador Bayesiano' },
    },
    {
        path: '/kurtosis',
        name: 'kurtosis',
        component: Kurtosis,
        meta: { title: 'Kurtosis' },
    },
    {
        path: '/pares',
        name: 'pares',
        component: Pares,
        meta: { title: 'Pares' },
    },
    {
        path: '/trenza-dorada',
        name: 'trenza-dorada',
        component: Trenza,
        meta: { title: 'Libro Una eterna Trenza Dorada' },
    },
    {
        path: '/chi',
        name: 'chi',
        component: Chi,
        meta: { title: 'Chi cuadrada usando un dataset del Titanic' },
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
