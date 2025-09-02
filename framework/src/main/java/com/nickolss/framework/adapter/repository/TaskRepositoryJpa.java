package com.nickolss.framework.adapter.repository;

import com.nickolss.framework.adapter.repository.entity.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface TaskRepositoryJpa extends JpaRepository<TaskEntity, UUID> {
}
