package com.nickolss.framework.adapter.web.controller;

import com.nickolss.framework.adapter.web.dto.TaskRequestDto;
import com.nickolss.framework.adapter.web.dto.TaskResponseDto;
import com.nickolss.framework.useCase.SubjectService;
import com.nickolss.framework.useCase.TaskService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import model.Subject;
import model.Task;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RequestMapping("api/v1/tasks")
@RestController
@Tag(name = "Task Controller", description = "Endpoints for managing tasks")
public class TaskController {
    private final TaskService taskService;
    private final SubjectService subjectService;

    public TaskController(TaskService taskService, SubjectService subjectService) {
        this.taskService = taskService;
        this.subjectService = subjectService;
    }

    @PostMapping
    @Operation(summary = "Create a new task", description = "Create a new task with the provided details")
    public ResponseEntity<TaskResponseDto> createTask(@Valid @RequestBody TaskRequestDto request) {
        Subject subject = subjectService.getSubjectById(request.subjectId());

        Task task = new Task(
                request.name(),
                request.description(),
                subject,
                request.startDate(),
                request.endDate()
        );

        Task createdTask = taskService.createTask(task);

        TaskResponseDto response = new TaskResponseDto(
                createdTask.getId(),
                createdTask.getName(),
                createdTask.getDescription(),
                createdTask.getStartDate(),
                createdTask.getEndDate()
        );

        return ResponseEntity.ok(response);
    }


    @GetMapping
    @Operation(summary = "Get all tasks", description = "Retrieve a list of all tasks")
    public ResponseEntity<List<TaskResponseDto>> getAllTasks() {
        List<Task> tasks = taskService.getAll();

        List<TaskResponseDto> response = tasks.stream().map(task -> new TaskResponseDto(
                task.getId(),
                task.getName(),
                task.getDescription(),
                task.getStartDate(),
                task.getEndDate()
        )).toList();

        return ResponseEntity.ok(response);
    }


    @GetMapping("/{id}")
    @Operation(summary = "Get task by ID", description = "Retrieve a task by its ID")
    public ResponseEntity<TaskResponseDto> getTaskById(@PathVariable("id") String id) {
        Task task = taskService.getTaskById(UUID.fromString(id));

        TaskResponseDto response = new TaskResponseDto(
                task.getId(),
                task.getName(),
                task.getDescription(),
                task.getStartDate(),
                task.getEndDate()
        );

        return ResponseEntity.ok(response);
    }

    @DeleteMapping
    @Operation(summary = "Delete task", description = "Delete a task with the provided details")
    public ResponseEntity<Void> deleteTask(@Valid @RequestBody Task task) {
        taskService.deleteTask(task);
        return ResponseEntity.noContent().build();
    }


    @DeleteMapping("/{id}")
    @Operation(summary = "Delete task by ID", description = "Delete a task by its ID")
    public ResponseEntity<Void> deleteTaskById(@PathVariable("id") String id) {
        taskService.deleteTaskById(UUID.fromString(id));
        return ResponseEntity.noContent().build();
    }
}
