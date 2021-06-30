import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',

  },
  { path: 'profile/:custId', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
