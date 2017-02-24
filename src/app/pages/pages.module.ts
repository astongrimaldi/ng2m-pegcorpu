import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  imports: [
    PagesRoutingModule
  ],
  declarations: [LandingPageComponent, SignupPageComponent, ProfilePageComponent]
})
export class PagesModule { }
