import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../components/home/home.component';
import { AppointmentComponent } from '../../components/appointment/appointment.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { AccountComponent } from '../../components/account/account.component';
import { LoginComponent } from '../../components/login/login.component';

import { AuthGuard } from '../../guards/auth/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'rdv', component: AppointmentComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
