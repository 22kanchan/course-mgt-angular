import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'', component:LayoutComponent,
    children:[
      { path:'', component: CourseListComponent },
      { path:'addCourse', component: AddCourseComponent },
      { path:'editCourse/:id', component: EditCourseComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseDetailsRoutingModule { }
