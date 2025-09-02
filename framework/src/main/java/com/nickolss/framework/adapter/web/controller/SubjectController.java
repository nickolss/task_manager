package com.nickolss.framework.adapter.web.controller;

import com.nickolss.framework.adapter.web.dto.SubjectRequestDto;
import com.nickolss.framework.adapter.web.dto.SubjectResponseDto;
import com.nickolss.framework.useCase.SubjectService;
import model.Subject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequestMapping("api/v1/subjects")
@RestController
public class SubjectController {
    private final SubjectService subjectService;

    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }

    @PostMapping
    public ResponseEntity<SubjectResponseDto> createSubject(@RequestBody SubjectRequestDto request) {
        Subject subject = new Subject(
                request.name(),
                request.description()
        );

        Subject createdSubject = subjectService.createSubject(subject);

        SubjectResponseDto responseDto = new SubjectResponseDto(
                createdSubject.getId(),
                createdSubject.getName(),
                createdSubject.getDescription()
        );

        return ResponseEntity.ok(responseDto);

    }

    @GetMapping
    public ResponseEntity<List<SubjectResponseDto>> getAllSubjects() {
        List<Subject> subjects = subjectService.getAll();

        List<SubjectResponseDto> responseDtos = subjects
                .stream()
                .map((subject -> new SubjectResponseDto(
                        subject.getId(),
                        subject.getName(),
                        subject.getDescription()
                )))
                .toList();

        return ResponseEntity.ok(responseDtos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SubjectResponseDto> getSubjectById(@PathVariable("id") String id) {
        Subject subject = subjectService.getSubjectById(java.util.UUID.fromString(id));

        SubjectResponseDto responseDto = new SubjectResponseDto(
                subject.getId(),
                subject.getName(),
                subject.getDescription()
        );

        return ResponseEntity.ok(responseDto);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteSubject(@RequestBody Subject subject) {
        subjectService.deleteSubject(subject);

        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubjectById(@PathVariable("id") String id) {
        subjectService.deleteSubjectById(java.util.UUID.fromString(id));

        return ResponseEntity.noContent().build();
    }
}
