import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Faq } from "../_models/Faq";

const baseUrl = `${environment.apiUrl}/faq`;

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  [x: string]: any;

  constructor( private http:HttpClient) { }

  getAll(){
    return this.http.get<Faq[]>('http://localhost:3000/faq');
  }

  getById(id: number) {
    return this.http.get<Faq>(`http://localhost:3000/faq/${id}`);
}

create(payload: Faq) {
    return this.http.post<Faq>(`http://localhost:3000/faq`, payload);
}

update(payload:Faq) {
    return this.http.put(`http://localhost:3000/faq/${payload.id}`, payload);
}

delete(id: number) {
    return this.http.delete<Faq>(`http://localhost:3000/faq/${id}`);
}
}
