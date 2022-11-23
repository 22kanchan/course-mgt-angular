import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../_models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Course[]>('http://localhost:3000/course');
  }

  create(payload: Course){
    return this.http.post<Course>('http://localhost:3000/course',payload);
  }

  getById(id: number){
    return this.http.get<Course>(`http://localhost:3000/course/${id}`);
  }

  update(payload: Course){
    return this.http.put(`http://localhost:3000/course/${payload.id}`, payload);
  }

  delete(id: number){
    return this.http.delete<Course>(`http://localhost:3000/course/${id}`);
  }
}
