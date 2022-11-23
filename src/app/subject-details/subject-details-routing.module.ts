import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { EditSubjectComponent } from './edit-subject/edit-subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';




const routes: Routes = [
  {
       path:'', component:LayoutComponent,
       children:[
      { path:'', component: SubjectListComponent },
      { path:'addSubjects', component: AddSubjectComponent },
      { path:'editSubjects/:id', component: EditSubjectComponent}
           ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectDetailsRoutingModule { }
