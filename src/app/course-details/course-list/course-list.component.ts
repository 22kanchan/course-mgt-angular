import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/_services/course.service';


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


  constructor(private courseService: CourseService) { }

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
