package service;

import model.Subject;

import java.util.List;
import java.util.UUID;

public interface SubjectInterface {
    Subject createSubject(Subject subject);
    void deleteSubject(Subject subject);
    void deleteSubjectById(UUID id);
    List<Subject> getAll();
    Subject getSubjectById(UUID id);
}
