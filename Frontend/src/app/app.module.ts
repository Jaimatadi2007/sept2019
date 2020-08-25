import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './index/footer/footer.component';
import { HomeComponent } from './index/home/home.component';
import { HeaderComponent } from './index/header/header.component';
import { ContactComponent } from './index/contact/contact.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddCatComponent } from './admin/add-cat/add-cat.component';
import { AddprodComponent } from './admin/addprod/addprod.component';
import { CategoryComponent } from './admin/category/category.component';
import { AdminService } from './_service/admin.service';
import { AdminGuard } from './_guard/admin.guard';
import { HttpClientModule } from '@angular/common/http';
import { CatserService } from './_service/catser.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    IndexComponent,
    NotfoundComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminHomeComponent,
    AddCatComponent,
    AddprodComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdminGuard, AdminService, CatserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
