import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../model/user';
import { UserService } from '../../services/user/user.service';

@Component({
    moduleId: module.id,
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {

    user: User;

    constructor(
        private userService: UserService,
        private router: Router)
    { }

    ngOnInit() {
        // reset login status
        this.user = this.userService.getLoggedInUser();
    }

    logout() {
        this.userService.logout()
            .then(resolve => {
                this.router.navigate(['/home']);
            })
            .catch(() => {
                console.log("error");
            });
    }
}
