import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddEditMemberComponent } from './components/add-edit-member/add-edit-member.component';


@NgModule({
  declarations: [
    AdminComponent,
    AddEditMemberComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
