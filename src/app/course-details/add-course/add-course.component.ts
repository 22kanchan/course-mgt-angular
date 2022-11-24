import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  [x: string]: any;

  courseForm: Course ={
    id: 0,
    courseName: '',
    courseCategory: '',
    courseCost: 0,
    courseDuration: '',
    courseSubjects: ''
  }

  constructor(private courseService: CourseService,
    private router: Router) { }

  ngOnInit(): void { }

  create(){
    this.courseService.create(this.courseForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/course"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
