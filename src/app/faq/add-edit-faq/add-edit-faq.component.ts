import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from '../../_services/alert.service';
import { FaqService } from 'src/app/_services/faq.service';
import { AccountService } from 'src/app/_services/account.service';
import { Faq } from 'src/app/_models/Faq';

@Component({
  selector: 'app-add-edit-faq',
  templateUrl: './add-edit-faq.component.html',
  styleUrls: ['./add-edit-faq.component.scss']
})
export class AddEditFaqComponent implements OnInit {
 faqForm : Faq = {
   id: 0,
   question: '',
   answer: ''
 }
    constructor(
        private router: Router,
        private faqService: FaqService,
  ) { }

  ngOnInit(): void{}

  create(){
    this.faqService.create(this.faqForm)
    .subscribe({
      next:(data: any) => {
        this.router.navigate(["./faq"])
      },
      error:(err: any) => {
        console.log
      }
    })
  }
  
}



