import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
//import { OAuthModule } from 'angular-oauth2-oidc-codeflow'; //Instead of this, use OAuthService
import { AuthConfig } from 'angular-oauth2-oidc-codeflow';
import { OAuthService, UrlHelperService } from 'angular-oauth2-oidc-codeflow';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    //OAuthModule.forRoot() --instead of this, use providers for OAuthService
  ],
  providers: [OAuthService, UrlHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
 
  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',
 
  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'spa-demo',
 
  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email voucher'  
}