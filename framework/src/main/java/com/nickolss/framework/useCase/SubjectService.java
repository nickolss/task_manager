package com.nickolss.framework.useCase;

import com.nickolss.framework.adapter.repository.SubjectRepositoryJpa;
import com.nickolss.framework.adapter.repository.entity.SubjectEntity;
import model.Subject;
import org.springframework.stereotype.Service;
import service.SubjectInterface;
import java.util.List;
import java.util.UUID;

@Service
public class SubjectService implements SubjectInterface {
    private final SubjectRepositoryJpa subjectRepositoryJpa;

    public SubjectService(SubjectRepositoryJpa subjectRepositoryJpa) {
        this.subjectRepositoryJpa = subjectRepositoryJpa;
    }

    @Override
    public Subject createSubject(Subject subject) {
        SubjectEntity entity = new SubjectEntity(
                subject.getName(),
                subject.getDescription()
        );

        subjectRepositoryJpa.save(entity);

        subject.setId(entity.getId());
        return subject;
    }

    @Override
    public void deleteSubject(Subject subject) {
        SubjectEntity entity = subjectRepositoryJpa.findById(subject.getId()).orElseThrow(() -> new IllegalArgumentException("Subject not found"));
        subjectRepositoryJpa.delete(entity);
    }

    @Override
    public void deleteSubjectById(UUID id) {
        subjectRepositoryJpa.deleteById(id);
    }

    @Override
    public List<Subject> getAll() {
        List<SubjectEntity> entities = subjectRepositoryJpa.findAll();
        return entities
                .stream()
                .map((entity) -> new Subject(
                        entity.getId(),
                        entity.getName(),
                        entity.getDescription()
                ))
                .toList();

    }

    @Override
    public Subject getSubjectById(UUID id) {
        SubjectEntity entity = subjectRepositoryJpa.findById(id).orElseThrow(() -> new IllegalArgumentException("Subject not found"));
        return new Subject(
                entity.getId(),
                entity.getName(),
                entity.getDescription()
        );
    }
}
