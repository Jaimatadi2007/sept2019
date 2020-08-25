import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './index/home/home.component';
import { ContactComponent } from './index/contact/contact.component';
import { AddCatComponent } from './admin/add-cat/add-cat.component';
import { AddprodComponent } from './admin/addprod/addprod.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CategoryComponent } from './admin/category/category.component';
import { AdminGuard } from './_guard/admin.guard';


const routes: Routes = [
  {path:'',component:IndexComponent,
    children:[
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'contact',component:ContactComponent},
    ]
  },

  {path:'admin',component:AdminComponent, canActivate:[AdminGuard],
    children:[
      {path:'',redirectTo:'adminhome',pathMatch:'full'},
      {path:'adminhome', component:AdminHomeComponent},
      {path:'addcat',component:AddCatComponent},
      {path:'addprod', component:AddprodComponent},
      {path:'category', component:CategoryComponent},

    ]
  },

  {path:'login',component:LoginComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
