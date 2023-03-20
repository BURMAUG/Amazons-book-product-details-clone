package com.snooze.amazonbookdetailssection.dto;

import jakarta.persistence.Embeddable;
import lombok.*;

@Embeddable
@AllArgsConstructor @NoArgsConstructor
@Setter @Getter
@ToString
public class Author {
    protected String firstName;
    protected String lastName;
}
