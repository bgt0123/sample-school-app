import { HttpClient } from '@angular/common/http';
import { Student } from "./Student";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class ApiService {

  baseURL: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseURL + 'students')
  }

  protected readonly Student = Student;
}
