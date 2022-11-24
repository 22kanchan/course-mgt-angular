import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/_services/faq.service';
import { Faq } from 'src/app/_models/Faq';
import { MatTableDataSource } from '@angular/material/table';

declare var window: any;

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {
allFaq: Faq[] = [];
deleteModal: any;
idTodelete:number=0;
public displayedColumns = ['id','question','answer','edit','delete']
  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    ) ;
    this.getAll();

  }

  getAll(){
    this.faqService.getAll().subscribe((data: Faq[]) => {
      this.allFaq = data;
      console.log(this.allFaq);
    });
    
  }

  openDeleteModal(id:number){
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete(){
    this.faqService.delete(this.idTodelete).subscribe({
      next: (data) => {
this.allFaq = this.allFaq.filter(_=>_.id != this.idTodelete)
// console.log(this.idTodelete = id);
      },
    });
  }


}
