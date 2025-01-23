import { Routes } from '@angular/router';
import { DefaultLoginPageComponent } from './components/default-login-page/default-login-page.component';
import { LoginComponent } from './pages/login/login.component';
export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    }
];
