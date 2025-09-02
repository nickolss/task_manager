package com.nickolss.framework.adapter.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Date;
import java.util.UUID;

public record TaskResponseDto(
        UUID id,
        String name,
        String description,
        @JsonProperty("start_date") Date startDate,
        @JsonProperty("end_date") Date endDate
) {
}
