package com.snooze.amazonbookdetailssection.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;
import org.springframework.validation.annotation.Validated;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
@Setter @Getter
@ToString
public class ProductInformation {
    protected String ASIN;
    protected String publisher;
    protected String language;
    protected BookCoverType bookCoverType;
    protected String isbn_10;
    protected String isbn_13;
    protected double itemWeight;
    protected String dimensions;

}
