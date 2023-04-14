package com.snooze.amazonbookdetailssection.model;

import jakarta.persistence.*;
import lombok.*;


@Entity
@AllArgsConstructor @NoArgsConstructor
@Setter @Getter
@ToString
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long authorID;
    private String firstName;
    private String lastName;
}
