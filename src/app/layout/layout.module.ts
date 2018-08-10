import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalMenuComponent } from './components/horizontal-menu/horizontal-menu.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { LayoutService } from './layout.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    HorizontalMenuComponent,
    UserMenuComponent,
    LayoutComponent
  ],
  providers: [LayoutService]
})
export class LayoutModule { }
