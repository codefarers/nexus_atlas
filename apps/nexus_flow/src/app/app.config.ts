import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { UserLoginService } from './core/auth/services/user-login-service';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes),
  provideAppInitializer(() => {
    const auth = inject(UserLoginService);
    return auth.init()
  })
  ],
};
