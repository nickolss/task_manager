package com.nickolss.framework.adapter.repository;

import com.nickolss.framework.adapter.repository.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface StudentRepositoryJpa extends JpaRepository<StudentEntity, UUID> {
}
