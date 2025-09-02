package com.nickolss.framework.adapter.web.controller;

import com.nickolss.framework.adapter.web.dto.TaskRequestDto;
import com.nickolss.framework.adapter.web.dto.TaskResponseDto;
import com.nickolss.framework.useCase.TaskService;
import model.Task;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("api/v1/tasks")
@RestController
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    public ResponseEntity<TaskResponseDto> createTask(@RequestBody TaskRequestDto request) {
        Task task = new Task(
                request.name(),
                request.description(),
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
    public ResponseEntity<Void> deleteTask(@RequestBody Task task) {
        taskService.deleteTask(task);
        return ResponseEntity.noContent().build();
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTaskById(@PathVariable("id") String id) {
        taskService.deleteTaskById(UUID.fromString(id));
        return ResponseEntity.noContent().build();
    }
}
