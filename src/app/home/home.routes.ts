import { HomeComponent } from './components';
import { Routes } from '@angular/router';

export const HomeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'users',
        loadChildren: '../+users/users.module#UsersModule'
    }
];
