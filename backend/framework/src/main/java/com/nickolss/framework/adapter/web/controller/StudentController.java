package com.nickolss.framework.adapter.web.controller;

import com.nickolss.framework.adapter.web.dto.StudentResponseDto;
import com.nickolss.framework.useCase.StudentService;
import model.Student;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequestMapping("api/v1/students")
@RestController
public class StudentController {
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public ResponseEntity<List<StudentResponseDto>> getStudents() {
        List<Student> students = studentService.getAllStudents();

        List<StudentResponseDto> studentDtos = students.stream()
                .map(student -> new StudentResponseDto(student.getId(), student.getName(), student.getEmail()))
                .toList();

        return ResponseEntity.ok(studentDtos);
    }

    @GetMapping("{id}")
    public ResponseEntity<StudentResponseDto> getStudentById(String id) {
        Student student = studentService.getStudentById(id);
        StudentResponseDto studentDto = new StudentResponseDto(student.getId(), student.getName(), student.getEmail());
        return ResponseEntity.ok(studentDto);
    }

    @PutMapping
    public ResponseEntity<StudentResponseDto> updateStudent(@RequestBody Student student) {
        Student updatedStudent = studentService.updateStudent(student);
        StudentResponseDto studentDto = new StudentResponseDto(updatedStudent.getId(), updatedStudent.getName(), updatedStudent.getEmail());
        return ResponseEntity.ok(studentDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteStudentById(String id) {
        studentService.deleteStudentById(id);
        return ResponseEntity.noContent().build();
    }
}
