import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { TimetableComponent } from './timetable/timetable.component';
import { RoomComponent } from './room/room.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {routing} from "./app.routing";



@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    TimetableComponent,
    RoomComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    StudentsComponent,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    routing,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  exports: [RouterModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
