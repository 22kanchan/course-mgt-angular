import { Component } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user.model';
import { Role } from './_models/role';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'course-mgt-angular';
  user!: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    get isAdmin() {
      return this.user && this.user.role === Role.Admin;
  }

    logout() {
        this.accountService.logout();
    }
}
