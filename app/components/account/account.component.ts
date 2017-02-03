import { Component } from '@angular/core';

import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})

export class AccountComponent {

    constructor(
        private userService: UserService,
        private router: Router)
    { }

    logout() {
        this.userService.logout()
            .then(resolve => {
                this.router.navigate(['/home']);
            })

    }
}
