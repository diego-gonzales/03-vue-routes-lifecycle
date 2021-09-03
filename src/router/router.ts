import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'

// import AboutPage from '@/modules/pokemon/pages/AboutPage.vue'
// import DetailPage from '@/modules/pokemon/pages/DetailPage.vue'
// import ListPage from '@/modules/pokemon/pages/ListPage.vue'
// import NotFoundPage from '@/modules/shared/pages/NotFoundPage.vue'
import isAuthenticatedGuard from './authentication-guard';

// Se reemplazaron las importaciones anteriores por lazyload
const routes: RouteRecordRaw[] = [
    // RUTAS DE MANERA GENERAL
    // { 
    //     path: '/home',
    //     name: 'Home',
    //     component: () => import(/* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage.vue') 
    // },
    // { 
    //     path: '/about',
    //     name: 'About',
    //     component: () => import(/* webpackChunkName: "AboutPage" */ '../modules/pokemon/pages/AboutPage.vue') 
    // },
    // { 
    //     path: '/detail/:pokemonId',
    //     name: 'Detail',
    //     component: () => import(/* webpackChunkName: "DetailPage" */  '../modules/pokemon/pages/DetailPage.vue'),
    //     props: (route) => { // ver video 126
    //         const pokemonId = Number(route.params.pokemonId);
    //         return isNaN(pokemonId) ? { pokemonId: 1 } : { pokemonId };
    //     }
    // },

    // USANDO RUTAS HIJAS EN LAYOUT POKEMON (video 130)
    {
        path: '/pokemon',
        name: 'Pokemon-Layout',
        component: () => import(/* webpackChunkName: "PokemonLayoutModule" */ '@/modules/pokemon/layouts/PokemonLayout.vue'),
        children: [
            { 
                path: 'home',
                name: 'Pokemon-Home',
                component: () => import(/* webpackChunkName: "PokemonListPage" */ '../modules/pokemon/pages/ListPage.vue') 
            },
            { 
                path: 'about',
                name: 'Pokemon-About',
                component: () => import(/* webpackChunkName: "PokemonAboutPage" */ '../modules/pokemon/pages/AboutPage.vue') 
            },
            { 
                path: 'detail/:pokemonId',
                name: 'Pokemon-Detail',
                component: () => import(/* webpackChunkName: "PokemonDetailPage" */  '../modules/pokemon/pages/DetailPage.vue'),
                props: (route) => { // ver video 126
                    const pokemonId = Number(route.params.pokemonId);
                    return isNaN(pokemonId) ? { pokemonId: 1 } : { pokemonId };
                }
            },
            {
                path: '',
                redirect: { name: 'Pokemon-Home' }
                // redirect: '/pokemon/home'
            }
        ]
    },

    // USANDO RUTAS HIJAS EN LAYOUT POKEMON
    {
        path: '/dbz',
        name: 'DBZ-Layout',
        beforeEnter: [ isAuthenticatedGuard ],
        component: () => import(/* webpackChunkName: "DBZLayoutModule" */ '@/modules/dbz/layouts/DragonBallZLayout.vue'),
        children: [
            {
                path: 'characters',
                name: 'DBZ-Characters',
                component: () => import(/* webpackChunkName: "DBZCharactersPage" */ '@/modules/dbz/pages/Characters.vue')
            },
            {
                path: 'about',
                name: 'DBZ-About',
                component: () => import(/* webpackChunkName: "DBZAboutPage" */ '@/modules/dbz/pages/About.vue')
            },
            {
                path: '',
                redirect: { name: 'DBZ-Characters' }
            }
        ]
    },
    { 
        path: '/:pathMatch(.*)*',
        // redirect: '/pokemon'
        component: () => import(/* webpackChunkName: "NotFoundPage" */ '../modules/shared/pages/NotFoundPage.vue')
    },
    {
        path: '/',
        redirect: '/pokemon'
    }
];

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes
});

// SYNC GLOBAL GUARD
// router.beforeEach((to, from, next) => {
//     // console.log({to, from, next});
//     const random = Math.random() * 100;
//     if (random > 50) {
//         console.log('Is Authenticated');
//         next();
//     } else {
//         console.warn('Not Authenticated');
//         next({ name: 'Pokemon-Home' })
//     };
// });

// const authenticated = (): Promise<boolean> => {
//     return new Promise( resolve => {
//         const random = Math.random() * 100;
//         if (random > 50) {
//             console.log('Is Authenticated');
//             resolve(true);
//         } else {
//             console.log('Not Authenticated');
//             resolve(false);
//         };
//     });
// };

// ASYNC GLOBAL GUARD
// router.beforeEach(async(to, from, next) => {
//     const isAuthenticated = await authenticated();
//     isAuthenticated ? next() : next({ name: 'Pokemon-Home' })
// });

// Otra forma de hacer el Guard Async
// const authenticated = (to: any, from: any, next: any): Promise<boolean> => {
//     return new Promise( resolve => {
//         const random = Math.random() * 100;
//         if (random > 50) {
//             console.log('Is Authenticated');
//             resolve(next());
//         } else {
//             console.log('Not Authenticated');
//             resolve(next({ name: 'Pokemon-Home' }));
//         };
//     });
// };

// ASYNC GLOBAL GUARD
// router.beforeEach(async(to, from, next) => {
//     await authenticated(to, from, next)
// });

export default router;