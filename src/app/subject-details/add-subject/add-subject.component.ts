import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subjects } from 'src/app/_models/subjects';
import { SubjectService } from 'src/app/_services/subject.service';



@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {

  subjectForm: Subjects ={
    id: 0,
    subjectName: '',
  }
  constructor( private subjectService: SubjectService,
    private router: Router) { }

  ngOnInit(): void {
  }

  create(){
    this.subjectService.create(this.subjectForm)
    .subscribe({
      next:(data) =>{
        this.router.navigate(["/subjects"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
