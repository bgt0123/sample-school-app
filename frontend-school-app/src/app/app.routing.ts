import {RouterModule, Routes} from "@angular/router";
import {StudentsComponent} from "./students/students.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {TimetableComponent} from "./timetable/timetable.component";
import {RoomComponent} from "./room/room.component";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";

const APP_ROUTES: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'student', component: StudentsComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'room', component: RoomComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: AppComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
