package com.nickolss.framework.adapter.repository;

import com.nickolss.framework.adapter.repository.entity.SubjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface SubjectRepositoryJpa extends JpaRepository<SubjectEntity, UUID> {
}