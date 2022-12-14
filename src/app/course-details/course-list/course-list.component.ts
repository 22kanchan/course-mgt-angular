import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/_services/course.service';
import { SubjectService } from 'src/app/_services/subject.service';
import { Subjects } from 'src/app/_models/subjects';

declare let Razorpay: any;
declare var window: any;
 
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  [x: string]: any;
allCourse: Course[] =[];
deleteModal: any;
idTodelete: number =0;
searchText='';
allSubjects: Subjects[]=[];
public displayedColumns =['id','name','category','cost','duration','subjects','edit','delete']


  constructor(private courseService: CourseService,
    private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }

  get(){
    this.courseService.get().subscribe((data)=>{
      this.allCourse = data;
    });
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  openDeleteModal(id: number){
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete(){
    this.courseService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allCourse = this.allCourse.filter(_=>_.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}
