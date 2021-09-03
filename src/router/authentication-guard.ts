import { NavigationGuard, NavigationGuardNext, NavigationGuardWithThis } from "vue-router";

const isAuthenticatedGuard = async(to: any, from: any, next: NavigationGuardNext): Promise<void> => {

    // No es necesario usar el 'resolve'
    return new Promise(() => {
        const random = Math.random() * 100;

        if (random > 50) {
            console.log('Is Authenticated');
            next();
        } else {
            console.log('Not Authenticated');
            next({ name: 'Pokemon-Home' });
        };
    });
};


export default isAuthenticatedGuard;