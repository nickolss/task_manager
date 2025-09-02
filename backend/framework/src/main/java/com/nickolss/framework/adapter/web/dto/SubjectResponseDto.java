package com.nickolss.framework.adapter.web.dto;

import java.util.UUID;

public record SubjectResponseDto(
        UUID id,
        String name,
        String description
) {
}
