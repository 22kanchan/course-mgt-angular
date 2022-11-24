import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
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
    CourseDetailsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    NgxMatSelectSearchModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ]
})
export class CourseDetailsModule { }
