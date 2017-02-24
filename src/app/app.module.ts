import { PageLayoutComponent } from './layout/page-layout/page-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminLayoutComponent,
    PageLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    DashboardModule,
    RouterModule.forRoot([]),
    PagesModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
