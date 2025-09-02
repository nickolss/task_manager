package com.nickolss.framework.adapter.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.Date;

public record TaskRequestDto(
        @NotBlank
        String name,

        @NotBlank
        String description,

        @NotNull
        @FutureOrPresent
        @JsonProperty("start_date") Date startDate,

        @FutureOrPresent
        @JsonProperty("end_date") Date endDate
) {
}
