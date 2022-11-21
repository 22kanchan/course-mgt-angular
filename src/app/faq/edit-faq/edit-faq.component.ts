import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Faq } from 'src/app/_models/Faq';
import { FaqService } from 'src/app/_services/faq.service';


@Component({
  selector: 'app-edit-faq',
  templateUrl: './edit-faq.component.html',
  styleUrls: ['./edit-faq.component.scss']
})
export class EditFaqComponent implements OnInit {
 faqForm: Faq = {
  id:0,
  question:'',
  answer:'',
 };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private faqService: FaqService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((__param: { get: (arg0: string) => any; })=> {
      var id = Number(__param.get('id'));
      this.getById(id);
    });
  }


  getById(id:number){
    this.faqService.getById(id).subscribe((data: Faq) => {
        this .faqForm = data;
    });
  }

  update() {
    this.faqService.update(this.faqForm)
    .subscribe({
      next:(data: any) => {
        this.router.navigate(["/faq"]);
      },
      error:(err: any) => {
        console.log(err);
      }
    })
  }
}
