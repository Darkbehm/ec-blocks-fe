import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkMenuComponent } from './components/link-menu/link-menu.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { MaterialModule } from 'src/material.module';
import { RouterModule } from '@angular/router';
import { BackgroundComponent } from './components/background/background.component';
import { DashedBorderComponent } from './components/dashed-border/dashed-border.component';
import { AddOptionComponent } from './components/add-option/add-option.component';
import { ManageOptionComponent } from './components/manage-option/manage-option.component';
import { ManageSectionComponent } from './components/manage-section/manage-section.component';
import { DragDirective } from './directives/drag.directive';
import { DragDropFileComponent } from './components/drag-drop-file/drag-drop-file.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { CardStoreComponent } from './components/card-store/card-store.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    SidebarMenuComponent,
    LinkMenuComponent,
    BackgroundComponent,
    DashedBorderComponent,
    AddOptionComponent,
    ManageOptionComponent,
    ManageSectionComponent,
    DragDirective,
    DragDropFileComponent,
    CodeEditorComponent,
    CardStoreComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    LinkMenuComponent,
    SidebarMenuComponent,
    BackgroundComponent,
    DashedBorderComponent,
    AddOptionComponent,
    ManageOptionComponent,
    ManageSectionComponent,
    DragDirective,
    DragDropFileComponent,
    CodeEditorComponent,
    CardStoreComponent,
  ],
})
export class SharedModule {}
