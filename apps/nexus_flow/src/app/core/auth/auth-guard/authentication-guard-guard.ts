import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { UserLoginService } from '../services/user-login-service';

export const authenticationGuardGuard: CanActivateFn = (route, state) => {
  const loginAuthService = inject(UserLoginService);

  if(loginAuthService.isLoggedin()) {
    return true;
  }
  loginAuthService.login().subscribe();
  return false;
};
