package com.nickolss.framework.useCase;

import model.Task;
import org.springframework.stereotype.Service;
import service.TaskInterface;

import java.util.List;
import java.util.UUID;

@Service
public class TaskService implements TaskInterface {
    @Override
    public Task createTask(Task task) {
        return null;
    }

    @Override
    public void deleteTask(Task task) {

    }

    @Override
    public void deleteTaskById(UUID id) {

    }

    @Override
    public List<Task> getAll() {
        return List.of();
    }

    @Override
    public Task getTaskById(UUID id) {
        return null;
    }
}
