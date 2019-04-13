import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './components';
import { SharedModule } from '../shared';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MainRoutingModule } from './main-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from '../home';

export const IMPORTED_MODULES: any = [
    CommonModule,
    BrowserModule,
    SharedModule,
    HomeModule,
    MainRoutingModule,
    BrowserAnimationsModule
];
export const COMPONENT_DECLARATIONS: any[] = [
    MainComponent
];
export const COMPONENT_EXPORTS: any[] = [

];
export const PROVIDERS_DECLARATIONS: any[] = [
    { provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true } }
]
export const BOOTSTRAP_DECLARATIONS: any[] = [
    MainComponent
]