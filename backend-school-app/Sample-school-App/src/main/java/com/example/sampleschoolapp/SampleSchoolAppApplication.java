package com.example.sampleschoolapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class }, scanBasePackages={
		"com.example.sampleschoolapp", "com.example.sampleschoolapp.Student"})
public class SampleSchoolAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(SampleSchoolAppApplication.class, args);
	}

}
