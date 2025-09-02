package com.nickolss.framework.useCase;

import com.nickolss.framework.adapter.repository.TaskRepositoryJpa;
import com.nickolss.framework.adapter.repository.entity.TaskEntity;
import model.Task;
import org.springframework.stereotype.Service;
import service.TaskInterface;
import java.util.List;
import java.util.UUID;

@Service
public class TaskService implements TaskInterface {
    private final TaskRepositoryJpa taskRepository;

    public TaskService(TaskRepositoryJpa taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Task createTask(Task task) {
        TaskEntity entity = new TaskEntity(
                task.getName(),
                task.getDescription(),
                task.getStartDate(),
                task.getEndDate()
        );

        taskRepository.save(entity);

        task.setId(entity.getId());
        return task;
    }

    @Override
    public void deleteTask(Task task) {
        TaskEntity entity = taskRepository.findById(task.getId()).orElseThrow(() -> new IllegalArgumentException("Task not found"));

        taskRepository.delete(entity);
    }

    @Override
    public void deleteTaskById(UUID id) {
        taskRepository.deleteById(id);
    }

    @Override
    public List<Task> getAll() {
        List<TaskEntity> entities = taskRepository.findAll();
        return entities
                .stream()
                .map((entity) -> new Task(
                        entity.getId(),
                        entity.getName(),
                        entity.getDescription(),
                        entity.getStartDate(),
                        entity.getEndDate()
                ))
                .toList();
    }

    @Override
    public Task getTaskById(UUID id) {
        TaskEntity entity = taskRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Task not found"));
        return new Task(
                entity.getId(),
                entity.getName(),
                entity.getDescription(),
                entity.getStartDate(),
                entity.getEndDate()
        );
    }
}
