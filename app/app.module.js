"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var material_1 = require('@angular/material');
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./services/user/mocks/in-memory-data.service');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
// Components
var app_component_1 = require('./app.component');
var home_component_1 = require('./components/home/home.component');
var appointment_component_1 = require('./components/appointment/appointment.component');
var contact_component_1 = require('./components/contact/contact.component');
var account_component_1 = require('./components/account/account.component');
var login_component_1 = require('./components/login/login.component');
// Services
var user_service_1 = require('./services/user/user.service');
// Modules
var app_routing_module_1 = require('./modules/routing/app-routing.module');
// Guards
var auth_guard_1 = require('./guards/auth/auth.guard');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                material_1.MaterialModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService)
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                appointment_component_1.AppointmentComponent,
                contact_component_1.ContactComponent,
                account_component_1.AccountComponent,
                login_component_1.LoginComponent
            ],
            providers: [
                user_service_1.UserService,
                auth_guard_1.AuthGuard
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map