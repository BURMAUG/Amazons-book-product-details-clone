package com.snooze.amazonbookdetailssection.model;

import com.snooze.amazonbookdetailssection.dto.Author;
import com.snooze.amazonbookdetailssection.dto.ProductInformation;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter @Getter
@ToString
public class BookDetails {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long bookId;
        private String bookName;
        private Author author;
        private ProductInformation productInformation;
}
