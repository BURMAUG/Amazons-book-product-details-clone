package com.snooze.amazonbookdetailssection.service;

import com.snooze.amazonbookdetailssection.model.BookDetails;

public interface BookDetailsService {
    Iterable<BookDetails> findAllBooks();

    BookDetails findBookBYTheID(long bookID);

    BookDetails updateBookDetails(long id, BookDetails bookDetails);

    void deleteBookByBookID(Long bookID);
    void deleteAllBooks();

    void createNewBook(BookDetails bookDetails);
}
