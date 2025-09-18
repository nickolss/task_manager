package com.nickolss.framework.adapter.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import model.Subject;

import java.util.Date;
import java.util.UUID;

public record TaskRequestDto(
        @NotBlank
        String name,

        @NotBlank
        String description,

        @NotNull
        @JsonProperty("subject_id") UUID subjectId,

        @NotNull
        @FutureOrPresent
        @JsonProperty("start_date") Date startDate,

        @FutureOrPresent
        @JsonProperty("end_date") Date endDate
) {
}
