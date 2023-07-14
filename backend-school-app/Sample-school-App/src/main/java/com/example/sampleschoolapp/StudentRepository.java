package com.example.sampleschoolapp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

    Student findStudentById(int id);

    List<Student> findAllByNameNotNullOrderByIdAsc();

    // TODO: test

}
