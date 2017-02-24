import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminLayoutComponent, PageLayoutComponent]
})
export class LayoutModule { }
