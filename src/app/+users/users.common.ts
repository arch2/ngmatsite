import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './users.routes';
import { UsersComponent } from './components';

export const IMPORTED_MODULES: any = [
    CommonModule,
    SharedModule,
    RouterModule.forChild(<any>UserRoutes),
];
export const COMPONENT_DECLARATIONS: any[] = [
    UsersComponent
];
export const COMPONENT_EXPORTS: any[] = [
    UsersComponent
];