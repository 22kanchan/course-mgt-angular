import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LayoutComponent } from './layout/layout.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { AddEditFaqComponent } from './add-edit-faq/add-edit-faq.component';
import { EditFaqComponent } from './edit-faq/edit-faq.component';

const routes: Routes = [
  {
    path:'', component:LayoutComponent,
    children:[
      { path:'', component: FaqListComponent },
      { path:'addfaq', component: AddEditFaqComponent },
      { path:'editfaq/:id', component: EditFaqComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule { }
