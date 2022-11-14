import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListComponent } from './users-list/users-list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
const routes: Routes = [
    { path: '', component: UsersListComponent },
    { path: 'add', component: AddEditComponent },
    { path: 'edit/:id', component: AddEditComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
