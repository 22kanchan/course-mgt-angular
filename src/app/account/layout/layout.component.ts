import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../_services/account.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private router: Router,
        private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

}
