import { Routes } from '@angular/router';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';  // ✅ Correct path
import { LoginPageComponent } from './login-page/login-page.component'; // ✅ Import LoginPage
export const routes: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignUpPageComponent },
    { path: 'login', component: LoginPageComponent },];
