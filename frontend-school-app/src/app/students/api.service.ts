1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28

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
    console.log('getStudents '+this.baseURL + 'students')
    return this.http.get<Student[]>(this.baseURL + 'students')
  }

  protected readonly Student = Student;
}
