import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkMenuComponent } from './components/link-menu/link-menu.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { MaterialModule } from 'src/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [SidebarMenuComponent, LinkMenuComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [LinkMenuComponent, SidebarMenuComponent],
})
export class SharedModule {}
