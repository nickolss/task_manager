package com.nickolss.framework.adapter.web.controller;

import com.nickolss.framework.adapter.web.dto.SubjectRequestDto;
import com.nickolss.framework.adapter.web.dto.SubjectResponseDto;
import com.nickolss.framework.useCase.SubjectService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import model.Subject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequestMapping("api/v1/subjects")
@RestController
@Tag(name = "Subject Controller", description = "Endpoints for managing subjects")
public class SubjectController {
    private final SubjectService subjectService;

    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }

    @PostMapping
    @Operation(summary = "Create a new subject", description = "Create a new subject with the provided details")
    public ResponseEntity<SubjectResponseDto> createSubject(@Valid @RequestBody SubjectRequestDto request) {
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
    @Operation(summary = "Get all subjects", description = "Retrieve a list of all subjects")
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
    @Operation(summary = "Get subject by ID", description = "Retrieve a subject by its ID")
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
    @Operation(summary = "Delete subject", description = "Delete a subject by providing the subject object")
    public ResponseEntity<Void> deleteSubject(@Valid @RequestBody Subject subject) {
        subjectService.deleteSubject(subject);

        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete subject by ID", description = "Delete a subject by its ID")
    public ResponseEntity<Void> deleteSubjectById(@PathVariable("id") String id) {
        subjectService.deleteSubjectById(java.util.UUID.fromString(id));

        return ResponseEntity.noContent().build();
    }
}
