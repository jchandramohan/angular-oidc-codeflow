import { Component } from '@angular/core';
//import { OAuthService } from 'angular-oauth2-oidc'; --instead of this, used from angular-oauth2-oidc-codeflow
import { OAuthService } from 'angular-oauth2-oidc-codeflow';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
//import { authConfig } from './auth.config';
import { authConfig } from '../app/app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular OIDC Demo';

  constructor(private oauthService: OAuthService) {
    this.configureWithNewConfigApi();    
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
     
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(_ => {
      console.log("Logged in");
    }).catch(err => {
      console.log("Unable to login");
    })
    
    
    // Call this.oauthService.tryLogin() if discovery document is not used.
    // All configurations must be set manually.
  }

  onLogin(event) {
    this.oauthService.initAuthorizationCodeFlow();
  }
}
