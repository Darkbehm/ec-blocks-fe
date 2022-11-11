import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkMenuComponent } from './components/link-menu/link-menu.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { MaterialModule } from 'src/material.module';
import { RouterModule } from '@angular/router';
import { BackgroundComponent } from './components/background/background.component';
import { DashedBorderComponent } from './components/dashed-border/dashed-border.component';

@NgModule({
  exports: [
    SidebarMenuComponent,
    LinkMenuComponent,
    BackgroundComponent,
    DashedBorderComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [
    LinkMenuComponent,
    SidebarMenuComponent,
    BackgroundComponent,
    DashedBorderComponent,
  ],
})
export class SharedModule {}
