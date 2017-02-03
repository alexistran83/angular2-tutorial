import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './services/user/user.service';

@Component({
    moduleId: module.id,
    selector: 'kine-web-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    logout() {
        this.userService.logout()
            .then(resolve => {
                this.router.navigate(['/home']);
            })
    }

    showLogoutBtn(): boolean {
        return this.userService.isLoggedIn();
    }
}
