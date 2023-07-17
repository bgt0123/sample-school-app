import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { TimetableComponent } from './timetable/timetable.component';
import { RoomComponent } from './room/room.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'student', component: StudentsComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'room', component: RoomComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    TeacherComponent,
    TimetableComponent,
    RoomComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
