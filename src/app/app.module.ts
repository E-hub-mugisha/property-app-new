import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LightboxModule } from 'ngx-lightbox';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Import FormsModule for ngModel
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    LightboxModule,
    AuthModule,
    AdminModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
})
export class AppModule {}
