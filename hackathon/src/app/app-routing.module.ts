import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { PagenotFoundComponent } from './core/pagenot-found/pagenot-found.component';
import { ProductListComponent } from './core/product-list/product-list.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { OrganirouteService } from './shared/services/Organiroute/organiroute.service';

const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'productlist',component:ProductListComponent,canActivate:[AuthGuard]},
  {path:'**',component:PagenotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
