import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user!: User;
  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
    this.user = this.accountService.userValue;
   }

  ngOnInit(): void {
  }
logout(){
  this.accountService.logout();
}
}
