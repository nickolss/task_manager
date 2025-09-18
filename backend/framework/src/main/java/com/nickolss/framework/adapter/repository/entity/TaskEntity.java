package com.nickolss.framework.adapter.repository.entity;

import jakarta.persistence.*;
import model.Subject;
import model.TaskStatus;
import org.springframework.data.annotation.CreatedDate;
import java.util.Date;
import java.util.UUID;

@Entity
public class TaskEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TaskStatus status = TaskStatus.PENDING;

    @JoinColumn(name = "subject_id", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private SubjectEntity subject;

    @Column(nullable = false)
    private Date startDate;

    @Column
    private Date endDate;

    @CreatedDate
    @Column(name = "created_at")
    private Date createAt;

    @Column(name = "updated_at")
    private Date updatedAt;

    public UUID getId() {
        return id;
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

    public SubjectEntity getSubject() {
        return subject;
    }

    public void setSubject(SubjectEntity subject) {
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

    public Date getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Date createAt) {
        this.createAt = createAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public TaskEntity(){

    }

    public TaskEntity(String name, String description, SubjectEntity subjectEntity, Date startDate, Date endDate) {
        this.name = name;
        this.description = description;
        this.subject = subjectEntity;
        this.startDate = startDate;
        this.endDate = endDate;
        this.createAt = new Date();
        this.updatedAt = new Date();
    }

    public TaskEntity(UUID id, String name, String description, Date startDate, Date endDate) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.createAt = new Date();
        this.updatedAt = new Date();
    }
}
