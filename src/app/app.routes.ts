import { Routes } from '@angular/router';
import { CustomerLayoutComponent } from './customer/customer-layout/customer-layout.component';
import { HomeComponent } from './customer/home/home.component';
import { AboutComponent } from './customer/about/about.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CategoriesComponent } from './admin/categories/categories.component';


export const routes: Routes = [


    {
        path: "", redirectTo: '/home', pathMatch: "full"
    },
    {
        path: "", component: CustomerLayoutComponent, children: [
            {
                path: "home", component: HomeComponent
            },
            {
                path: "about", component: AboutComponent
            }
        ]
    },


    {
        path: "admin", component: AdminLayoutComponent, children: [
            {
                path: "dashboard", component: DashboardComponent
            },
            {
                path: "category/manage", component: CategoriesComponent
            }
        ]
    }

];
