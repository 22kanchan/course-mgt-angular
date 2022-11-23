import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { CourseDetailsRoutingModule } from './course-details-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    CourseListComponent,
    EditCourseComponent,
    AddCourseComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CourseDetailsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CourseDetailsModule { }
