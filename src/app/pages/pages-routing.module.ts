import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Pegadaian Coorporate University'
    },
    children: [
      {
        path: 'landing',
        component: LandingPageComponent,
        data: {
          title: 'Main Page'
        }
      },
      {
        path: 'signup',
        component: SignupPageComponent,
        data: {
          title: 'SignUp Page'
        }
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
        data: {
          title: 'Profile Page'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
