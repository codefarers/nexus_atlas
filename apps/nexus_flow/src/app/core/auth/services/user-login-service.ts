import { Injectable } from '@angular/core';

import { BehaviorSubject, from, map, Observable } from 'rxjs';

import Keycloak from 'keycloak-js';

import { environmentDev } from '../../../environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  private _keycloak!: Keycloak;

  private _authenticatedSubject = new BehaviorSubject<boolean | undefined>(undefined);
  authenticated$ = this._authenticatedSubject.asObservable();
  devEnvironmentParams = environmentDev.keycloak;

  init(): Promise<boolean> {
    this._keycloak = new Keycloak({
      url: this.devEnvironmentParams.url,
      realm: this.devEnvironmentParams.realm,
      clientId: this.devEnvironmentParams.client_id,
    });

    return this._keycloak
      .init({
        onLoad: 'check-sso',
        pkceMethod: 'S256',
        checkLoginIframe: false,
      })
      .then((authenticated) => {
        this._authenticatedSubject.next(authenticated);
        return authenticated;
      })
      .catch((error) => {
        this._authenticatedSubject.next(false);
        return false;
      });
  }

  login(): Observable<void> {
    return from(
      this._keycloak.login({
        redirectUri: window.location.origin + '/dashboard',
      }),
    );
  }

  logout(): Observable<void> {
    return from(
      this._keycloak.logout({
        redirectUri: window.location.origin,
      }),
    );
  }

  isLoggedin(): boolean {
    return !!this._keycloak?.authenticated;
  }

  getToken(): Observable<string> {
    return from(this._keycloak.updateToken(30)).pipe(map(() => this._keycloak.token as string));
  }
}
