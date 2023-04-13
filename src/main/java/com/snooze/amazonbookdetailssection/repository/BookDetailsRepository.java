package com.snooze.amazonbookdetailssection.repository;

import com.snooze.amazonbookdetailssection.model.BookDetails;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookDetailsRepository extends CrudRepository<BookDetails, Long> {
    BookDetails findByBookName(String bookName);
}
