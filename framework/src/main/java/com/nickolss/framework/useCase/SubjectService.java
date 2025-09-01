package com.nickolss.framework.useCase;

import model.Subject;
import org.springframework.stereotype.Service;
import service.SubjectInterface;

import java.util.List;
import java.util.UUID;

@Service
public class SubjectService implements SubjectInterface {


    @Override
    public Subject createSubject(Subject subject) {
        return null;
    }

    @Override
    public void deleteSubject(Subject subject) {

    }

    @Override
    public void deleteSubjectById(UUID id) {

    }

    @Override
    public List<Subject> getAll() {
        return List.of();
    }

    @Override
    public Subject getSubjectById(UUID id) {
        return null;
    }
}
