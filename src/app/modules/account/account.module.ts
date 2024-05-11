import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    SendEmailComponent,
    ConfirmEmailComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
