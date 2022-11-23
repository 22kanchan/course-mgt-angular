import { Component, OnInit } from '@angular/core';
import { Subjects } from 'src/app/_models/subjects';
import { SubjectService } from 'src/app/_services/subject.service';

declare var window: any;

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
allSubjects: Subjects[] =[];
deleteModal: any;
idTodelete: number = 0;

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }
 
 
 get(){
  this.subjectService.get().subscribe((data) => {
    this.allSubjects = data;
  })
  
 }

 openDeleteModal(id:number){
  this.idTodelete = id;
  this.deleteModal.show();
 }

 delete(){
  this.subjectService.delete(this.idTodelete).subscribe({
    next:(data) => {
      this.allSubjects = this.allSubjects.filter(_=>_.id != this.idTodelete)
      this.deleteModal.hide();
    },
  });
 }
}
