import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { Faq } from "src/app/_models/Faq";
import { FaqService } from 'src/app/_services/faq.service';
import { first } from 'rxjs/operators';


declare var window: any;
@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss'],
  animations:[
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FaqListComponent {
  allFaq: Faq[]=[];
  idToDelete: number = 0;
  deleteModal: any;
  faq: any;
  constructor(private faqService:FaqService){}

  ngOnInit(): void{
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.getAll();
  }


  getAll(){
    this.faqService.getAll().subscribe((data)=>{
      this.allFaq = data ;
    });
  }


  openDeleteModal(id:number){
    this.idToDelete = id;
    this.deleteModal.show();
  }


 delete(){
  this.faqService.delete(this.idToDelete).subscribe({
    next: (data) => {
      this.allFaq = this.allFaq.filter(_=>_.id != this.idToDelete)
      this.deleteModal.hide();
    }
  })
 }
}

