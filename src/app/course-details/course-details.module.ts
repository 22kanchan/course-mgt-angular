import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


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
    FormsModule,
    MatListModule,
    NgxMatSelectSearchModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class CourseDetailsModule { }
