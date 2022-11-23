import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FaqRoutingModule } from './faq-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { AddEditFaqComponent } from './add-edit-faq/add-edit-faq.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { EditFaqComponent } from './edit-faq/edit-faq.component';


@NgModule({
  declarations: [
    LayoutComponent,
    FaqListComponent,
    AddEditFaqComponent,
    EditFaqComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FaqModule { }
