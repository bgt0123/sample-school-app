import {Component} from '@angular/core';
import {ApiService} from "./api.service";
import {Student} from "./Student";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students: Student[] | undefined;
  student = new Student();

  constructor(private apiService:ApiService) {}

  ngOnInit() {
    this.refreshPeople()
  }

  refreshPeople() {
    this.apiService.getStudents()
      .subscribe(data => {
        console.log(data)
        this.students=data;
      })

  }
}
