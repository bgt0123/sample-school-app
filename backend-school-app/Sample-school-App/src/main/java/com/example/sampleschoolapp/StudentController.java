package com.example.sampleschoolapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    StudentRepository studentRepository; // TODO: Replace later with Service Layer

    @GetMapping(value= "/{id}", produces = "application/json")
    public @ResponseBody Student getStudent(@PathVariable int id){
        return studentRepository.findStudentById(id);
    }

    @GetMapping(value= "", produces = "application/json")
    public @ResponseBody List<Student> getStudent(){
        return studentRepository.findAllByNameNotNull();
    }
}

