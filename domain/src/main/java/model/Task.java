package model;

import java.util.Date;
import java.util.UUID;

public record Task (
   UUID id,
   String name,
   String description,
   Date startDate,
   Date endDate
) {}
