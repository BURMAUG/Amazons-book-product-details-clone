package com.snooze.amazonbookdetailssection.dto;

import com.snooze.amazonbookdetailssection.dto.BookCoverType;
import jakarta.persistence.Embeddable;
import lombok.*;

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

//    public static void main(String[] args) {
//        ProductInformation information = new ProductInformation("Asdfsad",
//                "Pendgiun",
//                "English",
//                BookCoverType.HARDCOVER,
//                "2132342323",
//                "232-232323",
//                21.3,
//                "23 x 3 inches");
//
//        System.out.println(information);
//    }
}
