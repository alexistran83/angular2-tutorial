import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/user/mocks/in-memory-data.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ContactComponent } from './components/contact/contact.component';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';

// Services
import { UserService } from './services/user/user.service';

// Modules
import { AppRoutingModule } from './modules/routing/app-routing.module';

// Guards
import { AuthGuard } from './guards/auth/auth.guard';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        MaterialModule.forRoot(),
        AppRoutingModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AppointmentComponent,
        ContactComponent,
        AccountComponent,
        LoginComponent
    ],
    providers: [
        UserService,
        AuthGuard
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
