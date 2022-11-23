import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subjects } from 'src/app/_models/subjects';
import { SubjectService } from 'src/app/_services/subject.service';



@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.scss']
})
export class EditSubjectComponent implements OnInit {
subjectForm: Subjects ={
  id: 0,
  subjectName: ''
}
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id : number){
    this.subjectService.getById(id).subscribe((data) =>{
      this.subjectForm =data;
    });
  }

  update(){
    this.subjectService.update(this.subjectForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/subjects"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
