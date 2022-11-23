import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectDetailsRoutingModule } from './subject-details-routing.module';
import { EditSubjectComponent } from './edit-subject/edit-subject.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    EditSubjectComponent,
    AddSubjectComponent,
    SubjectListComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SubjectDetailsRoutingModule
  ]
})
export class SubjectDetailsModule { }
