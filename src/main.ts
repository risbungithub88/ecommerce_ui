import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginPageComponent } from './app/login-page/login-page.component';
import { SignUpPageComponent } from './app/sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});