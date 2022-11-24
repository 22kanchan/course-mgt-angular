import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/_services/course.service';
import { SubjectService } from 'src/app/_services/subject.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  allSubjects: Array<any> | undefined;
  listSubjects: Array<number>;

  courseForm: Course = {
    id: 0,
    courseName: '',
    courseCategory: '',
    courseDuration: '',
    courseCost: 0,
    courseSubjects: [],
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private subjectService: SubjectService,
    private cdref: ChangeDetectorRef
  ) {
    this.listSubjects = []
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    })
    this.get();
  }

  get() {
    this.subjectService.get().subscribe((data: any) => {
      this.allSubjects = data;
      console.log(this.allSubjects)
    });
  }

  getById(id: number) {
    this.courseService.getById(id).subscribe((data) => {
      this.courseForm = data;
      this.listSubjects = data.courseSubjects
    });
  }

  update() {
    this.courseForm.courseSubjects = this.listSubjects;

    this.courseService.update(this.courseForm)
      .subscribe({
        next: (data) => {
          this.router.navigate(["/course"]);
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  selectionChange(event: any) {
    console.log(event.options);
    if (event.options[0].selected) {
      if (this.listSubjects.length === 0)
        this.listSubjects.push(event.options[0].value)
      else if (!this.listSubjects.includes(event.options[0].value))
        this.listSubjects.push(event.options[0].value)
    }
    else if (!event.options[0].selected) {
      if (this.listSubjects?.includes(event.options[0].value)) {
        console.log('called');
        this.listSubjects = this.listSubjects.filter(item => item !== event.options[0].value)
      }
    }
    console.log(this.listSubjects)
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
}
