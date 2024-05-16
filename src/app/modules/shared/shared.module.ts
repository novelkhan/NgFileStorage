import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { ValidationMessagesComponent } from './components/errors/validation-messages/validation-messages.component';
import { NotificationComponent } from './components/modals/notification/notification.component';
import { UserHasRoleDirective } from './directives/user-has-role.directive';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    NotFoundComponent,
    ValidationMessagesComponent,
    NotificationComponent,
    UserHasRoleDirective
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ]
})
export class SharedModule { }
