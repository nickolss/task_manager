package service;

import model.Student;
import java.util.List;

public interface StudentInterface {
    void deleteStudentById(String id);
    Student updateStudent(Student student);
    Student getStudentById(String id);
    List<Student> getAllStudents();
}
