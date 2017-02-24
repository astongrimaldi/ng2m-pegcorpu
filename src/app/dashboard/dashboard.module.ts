import { MODULE_COMPONENTS, MODULE_ROUTES } from './dasboard.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    RouterModule.forChild(MODULE_ROUTES)
  ],
  declarations: [MODULE_COMPONENTS, UserComponent]
})
export class DashboardModule { }
