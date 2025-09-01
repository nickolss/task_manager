package model;

import java.util.UUID;

public record Subject(
        UUID id,
        String name,
        String description
) {
}
