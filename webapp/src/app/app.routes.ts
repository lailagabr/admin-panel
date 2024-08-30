import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/mange/categories/categories.component';
import { CategoryFormComponent } from './components/mange/category-form/category-form.component';
import { BrandsComponent } from './components/mange/brands/brands.component';
import { BrandFormComponent } from './components/mange/brand-form/brand-form.component';

export const routes: Routes = [

{
    path:"admin/categories",
    component:HomeComponent
},
{
    path:"",
    component:CategoriesComponent
},
{
    path:"admin/categories/add",
    component:CategoryFormComponent
},
{
    path:"admin/categories/:id",
    component:CategoryFormComponent
},


{
    path:"admin/brands",
    component:BrandsComponent
},
{
    path:"admin/brands/add",
    component:BrandFormComponent
},
{
    path:"admin/brands/:id",
    component:BrandFormComponent
},

];
