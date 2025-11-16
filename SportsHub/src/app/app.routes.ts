import { Routes } from '@angular/router';
import { Products } from './pages/PortalAdmin/products/products'
import { Users } from './pages/PortalAdmin/users/users';
import { EditProducts } from './pages/PortalAdmin/EditProducts/editP';
import { EditUsers } from './pages/PortalAdmin/EditUsers/editU';

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
    },
    {
        path: 'PortalAdmin/EditProducts',
        component: EditProducts,
        title: 'Editar Produtos'
    },
    {
        path: 'PortalAdmin/EditUsers',
        component: EditUsers,
        title: 'Editar Usuários'
    }
];
