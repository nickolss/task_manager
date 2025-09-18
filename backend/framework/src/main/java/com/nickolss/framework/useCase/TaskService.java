package com.nickolss.framework.useCase;

import com.nickolss.framework.adapter.repository.TaskRepositoryJpa;
import com.nickolss.framework.adapter.repository.entity.SubjectEntity;
import com.nickolss.framework.adapter.repository.entity.TaskEntity;
import model.Subject;
import model.Task;
import org.springframework.stereotype.Service;
import service.TaskInterface;
import java.util.List;
import java.util.UUID;

@Service
public class TaskService implements TaskInterface {
    private final TaskRepositoryJpa taskRepository;
    private final SubjectService subjectService;

    public TaskService(TaskRepositoryJpa taskRepository, SubjectService subjectService) {
        this.taskRepository = taskRepository;
        this.subjectService = subjectService;
    }

    @Override
    public Task createTask(Task task) {
        Subject subject = subjectService.getSubjectById(task.getSubject().getId());
        SubjectEntity subjectEntity = new SubjectEntity(
                subject.getId(),
                subject.getName(),
                subject.getDescription()
        );


        TaskEntity entity = new TaskEntity(
                task.getName(),
                task.getDescription(),
                subjectEntity,
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
                        new Subject(
                                entity.getSubject().getId(),
                                entity.getSubject().getName(),
                                entity.getSubject().getDescription()
                        ),
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
                new Subject(
                        entity.getSubject().getId(),
                        entity.getSubject().getName(),
                        entity.getSubject().getDescription()
                ),
                entity.getStartDate(),
                entity.getEndDate()
        );
    }
}
