import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { provideHttpClient, withFetch } from '@angular/common/http';

AOS.init();

bootstrapApplication(AppComponent, {
  ...appConfig, // Spread existing appConfig
  providers: [
    ...appConfig.providers || [], // Include existing providers from appConfig
    provideAnimations(), // Required for animations
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    provideHttpClient(withFetch()), // Required for HTTP requests
  ],
})
  .catch((err) => console.error(err));
