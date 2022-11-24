import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Router } from '@angular/router'
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/_services/course.service';
import { SubjectService } from 'src/app/_services/subject.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  [x: string]: any;
  allSubjects: Array<any> | undefined;
  listSubjects: Array<number>;
  courseForm: Course = {
    id: 0,
    courseName: '',
    courseCategory: '',
    courseCost: 0,
    courseDuration: '',
    courseSubjects: []
  }

  constructor(private courseService: CourseService, private subjectService: SubjectService,
    private router: Router) {
    this.listSubjects = []
  }

  ngOnInit(): void {
    this.get();
  }


  get() {
    this.subjectService.get().subscribe((data: any) => {
      this.allSubjects = data;
      console.log(this.allSubjects)
    });
  }

  create() {

    this.courseForm.courseSubjects = this.listSubjects;

    this.courseService.create(this.courseForm)
      .subscribe({
        next: (data) => {
          this.router.navigate(["/course"])
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  selectionChange(event: any) {
    console.log(event.options);
    if (event.options[0].selected) {
      this.listSubjects?.push(event.options[0].value)
    }
    else if (!event.options[0].selected) {
      if (this.listSubjects?.includes(event.options[0].value))
        this.listSubjects = this.listSubjects.filter(item => item !== event.options.value)
    }
    console.log(this.listSubjects)
  }


  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
