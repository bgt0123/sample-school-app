package com.example.sampleschoolapp.Student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping(value= "/{id}", produces = "application/json")
    public @ResponseBody Student getStudent(@PathVariable int id){
        return studentRepository.findById(id);
    }

}

