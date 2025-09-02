package service;

import model.Task;

import java.util.List;
import java.util.UUID;

public interface TaskInterface {
    Task createTask(Task task);
    void deleteTask(Task task);
    void deleteTaskById(UUID id);
    List<Task> getAll();
    Task getTaskById(UUID id);
}
