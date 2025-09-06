package com.nickolss.framework.useCase;

import com.nickolss.framework.adapter.repository.StudentRepositoryJpa;
import com.nickolss.framework.adapter.repository.entity.StudentEntity;
import model.Student;
import org.springframework.stereotype.Service;
import service.StudentInterface;
import java.util.List;
import java.util.UUID;

@Service
public class StudentService implements StudentInterface {

    private final StudentRepositoryJpa studentRepositoryJpa;

    public StudentService(StudentRepositoryJpa studentRepositoryJpa) {
        this.studentRepositoryJpa = studentRepositoryJpa;
    }

    @Override
    public void deleteStudentById(String id) {
        studentRepositoryJpa.deleteById(UUID.fromString(id));
    }

    @Override
    public Student updateStudent(Student student) {
        StudentEntity entity = studentRepositoryJpa.findById(student.getId()).orElseThrow(() -> new IllegalArgumentException("Student not found"));
        entity.setName(student.getName());
        entity.setEmail(student.getEmail());
        entity.setPassword(student.getPassword());

        studentRepositoryJpa.save(entity);

        return new Student(
                entity.getId(),
                entity.getName(),
                entity.getEmail(),
                entity.getPassword()
        );
    }

    @Override
    public Student getStudentById(String id) {
        StudentEntity entity = studentRepositoryJpa.findById(UUID.fromString(id)).orElseThrow(() -> new IllegalArgumentException("Student not found"));

        return new Student(
                entity.getId(),
                entity.getName(),
                entity.getEmail(),
                entity.getPassword()
        );
    }

    @Override
    public List<Student> getAllStudents() {
        List<StudentEntity> entities = studentRepositoryJpa.findAll();

        return entities.stream().map(entity -> new Student(
                entity.getId(),
                entity.getName(),
                entity.getEmail(),
                entity.getPassword()
        )).toList();
    }
}
