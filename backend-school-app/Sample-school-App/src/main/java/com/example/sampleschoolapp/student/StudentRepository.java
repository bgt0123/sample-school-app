package com.example.sampleschoolapp.student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

    Student findStudentById(int id);

    List<Student> findAllByFirstnameNotNullOrderByIdAsc();
}
