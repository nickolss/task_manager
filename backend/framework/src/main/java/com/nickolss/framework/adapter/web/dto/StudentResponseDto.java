package com.nickolss.framework.adapter.web.dto;

import java.util.UUID;

public record StudentResponseDto(
        UUID id,
        String name,
        String email
) {
}
