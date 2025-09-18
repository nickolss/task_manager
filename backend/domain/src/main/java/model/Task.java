package model;

import java.util.Date;
import java.util.UUID;

public class Task {
    private UUID id;
    private String name;
    private String description;
    private TaskStatus status;
    private Subject subject;
    private Date startDate;
    private Date endDate;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public void setStatus(TaskStatus status) {
        this.status = status;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Task() {
    }

    public Task(String name, String description, Subject subject, Date startDate, Date endDate) {
        this.name = name;
        this.description = description;
        this.status = TaskStatus.PENDING;
        this.subject = subject;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Task(UUID id, String name, String description, Subject subject, Date startDate, Date endDate) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = TaskStatus.PENDING;
        this.subject = subject;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
