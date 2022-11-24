import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
courseForm: Course = {
  id: 0,
  courseName: '',
  courseCategory: '',
  courseDuration: '',
  courseCost: 0,
  courseSubjects: []
}
  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      var id = Number(param.get('id'));
      this.getById(id);
    })
  }

  getById(id: number){
    this.courseService.getById(id).subscribe((data) => {
      this.courseForm = data;
    });
  }

  update(){
    this.courseService.update(this.courseForm)
    .subscribe({
      next:(data) =>{
        this.router.navigate(["/course"]);
      },
      error:(err) => {
        console.log(err)
      }
    })
  }

}
