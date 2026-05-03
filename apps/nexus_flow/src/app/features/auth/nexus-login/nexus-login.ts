import { Component, OnInit, inject } from '@angular/core';
import { UserLoginService } from '../../../core/auth/services/user-login-service';

@Component({
  selector: 'app-nexus-login',
  imports: [],
  templateUrl: './nexus-login.html',
})
export class NexusLogin implements OnInit {
  private _cloakLoginAuthService = inject(UserLoginService);

  ngOnInit() {
    if (!this._cloakLoginAuthService.isLoggedin()) {
      this.loginWithKeycloak();
    }
  }

  loginWithKeycloak() {
    this._cloakLoginAuthService.login();
  }
}
