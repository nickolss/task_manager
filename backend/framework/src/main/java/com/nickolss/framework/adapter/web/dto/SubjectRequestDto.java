package com.nickolss.framework.adapter.web.dto;

import jakarta.validation.constraints.NotBlank;

public record SubjectRequestDto(
        @NotBlank
        String name,

        @NotBlank
        String description
) {
}
