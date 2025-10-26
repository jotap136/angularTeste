import { Routes } from '@angular/router';
import { Products } from './pages/PortalAdmin/products/products'
import { Users } from './pages/PortalAdmin/users/users';

export const routes: Routes = [
    {
        path: 'PortalAdmin/products',
        component: Products,
        title: 'produtos'
    },
    {
        path: 'PortalAdmin/users',
        component: Users,
        title: 'usuários'
    }
];
