package com.example.sampleschoolapp.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/students", method = {RequestMethod.GET, RequestMethod.POST})
public class StudentController {

    @Autowired //sorgt für die Dependency Injection -> new wird nicht benötigt - Spring Boot erzeugt Java Beans in dem ApplicationContext
    StudentRepository studentRepository; // TODO: Replace later with Service Layer once Business Logic is implemented

    @Autowired
    StudentService studentService;

    @GetMapping(value= "/{id}", produces = "application/json")
    public @ResponseBody StudentDto getStudent(@PathVariable int id){
        return studentRepository.findStudentById(id).toStudentDto();
    }

    @GetMapping(value= "", produces = "application/json")
    public @ResponseBody List<StudentDto> getStudents(){
        return studentRepository.findAllByFirstnameNotNullOrderByIdAsc().stream()
                .map(StudentDto::new)
                .collect(Collectors.toList());
    }

    @PostMapping(value = "")
    public ResponseEntity<Student> createStudent(@RequestBody Student student){
        Student newStudent = studentRepository.save(student);
        return ResponseEntity.ok(newStudent);
    }
}

