package com.example.sampleschoolapp.student;

public class StudentDto {
    private final Student student;

    public StudentDto(Student student){
        this.student = student;
    }
    public Integer getId(){
        return this.student.getId();
    }
    public String getName(){
        return this.student.getFirstname() + " " + this.student.getLastname();
    }
    public String getEmail(){
        return this.student.getEmail();
    }
}
