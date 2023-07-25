import {Component, OnInit} from '@angular/core';
import {ApiService} from "./api.service";
import {Student} from "./Student";
import {MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  imports: [MatTableModule],
  standalone: true
})

export class StudentsComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource!:Student[];
  constructor(private apiService:ApiService) {}

  ngOnInit() {
    this.refreshPeople()
  }

  refreshPeople() {
    this.apiService.getStudents()
      .subscribe(data => {
        console.log(data)
        this.dataSource=data;
      })
  }

  onRowClicked(row: any) {
    console.log('Row clicked: ', row);
  }

  editStudents() {
    console.log("edit")
  }
}
