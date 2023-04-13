package com.snooze.amazonbookdetailssection.model;

import com.snooze.amazonbookdetailssection.dto.ProductInformation;
import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter @Getter
@ToString
public class BookDetails {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Column(name = "book_id", nullable = false)
        private Long bookId;
        @Column(name = "book_name", nullable = false)
        private String bookName;
        @ManyToOne(cascade = CascadeType.PERSIST, optional = false)
        @JoinColumn(name = "author_id", nullable = false)
        private Author author;
        @Column(name = "production_info", nullable = false)
        private ProductInformation productInformation;
}
