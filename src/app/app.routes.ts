import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './dashboard/home/home.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            { path: 'home', component: HomeComponent }
        ]
    }
]