package com.example.sampleschoolapp.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

    Student findById(int id);

    List<Student> findAllByNameNotNull();

    // TODO: test

}
