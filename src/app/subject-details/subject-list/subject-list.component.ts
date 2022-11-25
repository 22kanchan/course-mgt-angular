import { Component, OnInit, ViewChild } from '@angular/core';
import { Subjects } from 'src/app/_models/subjects';
import { SubjectService } from 'src/app/_services/subject.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

declare var window: any;

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
allSubjects: Subjects[] =[];
deleteModal: any;
idTodelete: number = 0;
public displayedColumns =['id','name','category','description','edit','delete']
public dataSource = new MatTableDataSource<Subjects>();
  @ViewChild(MatSort)
  sort!: MatSort;
  

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }
 
  ngAfterViewInit():void {    
    this.dataSource.sort = this.sort;
}

getList(){
  this.subjectService.get().subscribe(
    (data: any) =>{
      console.log(data);
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
      console.log('sort', this.sort);
    }
  )
}

 get(){
  this.subjectService.get().subscribe((data) => {
    this.allSubjects = data;
    console.log(this.allSubjects);
  })
  
 }

 openDeleteModal(id:number){
  this.idTodelete = id;
  this.deleteModal.show();
 }

 delete(){
  this.subjectService.delete(this.idTodelete).subscribe({
    next:(data) => {
      this.allSubjects = this.allSubjects.filter(_=>_.id != this.idTodelete)
      this.deleteModal.hide();
    },
  });
 }
}
