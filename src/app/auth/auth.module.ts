// auth.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule, // Import AuthRoutingModule
    FormsModule,
    ReactiveFormsModule,
    RegisterComponent, // Import RegisterComponent
    LoginComponent, // Import LoginComponent
  ],
})
export class AuthModule {}
