import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subjects } from '../_models/subjects';




@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Subjects[]>('http://localhost:3000/subjects');
  }
  create(payload: Subjects){
    return this.http.post<Subjects>('http://localhost:3000/subjects', payload);
  }
  getById(id: number) {
    return this.http.get<Subjects>(`http://localhost:3000/subjects/${id}`);
   }
    
   update(payload:Subjects){
    return this.http.put(`http://localhost:3000/subjects/${payload.id}`,payload);
   }

   delete(id:number){
    return this.http.delete<Subjects>(`http://localhost:3000/subjects/${id}`);
 }
}
