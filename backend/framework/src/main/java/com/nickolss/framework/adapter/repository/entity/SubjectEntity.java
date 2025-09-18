package com.nickolss.framework.adapter.repository.entity;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
public class SubjectEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

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

    public SubjectEntity() {

    }

    public SubjectEntity(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public SubjectEntity(UUID id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
