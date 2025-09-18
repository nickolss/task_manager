package com.nickolss.framework.adapter.web.controller;

import com.nickolss.framework.adapter.web.dto.StudentResponseDto;
import com.nickolss.framework.useCase.StudentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import model.Student;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequestMapping("api/v1/students")
@RestController
@Tag(name = "Student Controller", description = "Endpoints for managing students")
public class StudentController {
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    @Operation(summary = "Get all students", description = "Retrieve a list of all students")
    public ResponseEntity<List<StudentResponseDto>> getStudents() {
        List<Student> students = studentService.getAllStudents();

        List<StudentResponseDto> studentDtos = students.stream()
                .map(student -> new StudentResponseDto(student.getId(), student.getName(), student.getEmail()))
                .toList();

        return ResponseEntity.ok(studentDtos);
    }

    @GetMapping("{id}")
    @Operation(summary = "Get student by ID", description = "Retrieve a student by their ID")
    public ResponseEntity<StudentResponseDto> getStudentById(String id) {
        Student student = studentService.getStudentById(id);
        StudentResponseDto studentDto = new StudentResponseDto(student.getId(), student.getName(), student.getEmail());
        return ResponseEntity.ok(studentDto);
    }

    @PutMapping
    @Operation(summary = "Update student", description = "Update an existing student's information")
    public ResponseEntity<StudentResponseDto> updateStudent(@RequestBody Student student) {
        Student updatedStudent = studentService.updateStudent(student);
        StudentResponseDto studentDto = new StudentResponseDto(updatedStudent.getId(), updatedStudent.getName(), updatedStudent.getEmail());
        return ResponseEntity.ok(studentDto);
    }

    @DeleteMapping("{id}")
    @Operation(summary = "Delete student by ID", description = "Delete a student by their ID")
    public ResponseEntity<Void> deleteStudentById(String id) {
        studentService.deleteStudentById(id);
        return ResponseEntity.noContent().build();
    }
}
