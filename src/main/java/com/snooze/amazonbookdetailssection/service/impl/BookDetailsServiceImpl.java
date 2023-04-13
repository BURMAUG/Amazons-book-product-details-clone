package com.snooze.amazonbookdetailssection.service.impl;

import com.snooze.amazonbookdetailssection.exception.BookAlreadyExistsException;
import com.snooze.amazonbookdetailssection.exception.BookDetailNotFoundException;
import com.snooze.amazonbookdetailssection.exception.BookObjectsCannotBeNullException;
import com.snooze.amazonbookdetailssection.model.BookDetails;
import com.snooze.amazonbookdetailssection.repository.BookDetailsRepository;
import com.snooze.amazonbookdetailssection.service.BookDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class BookDetailsServiceImpl implements BookDetailsService {
    private BookDetailsRepository bookDetailsRepository;
    @Override
    public Iterable<BookDetails> findAllBooks() {
        return bookDetailsRepository.findAll();
    }

    @Override
    public BookDetails findBookBYTheID(long bookID) {
        return bookDetailsRepository.findById(bookID)
                .orElseThrow(() -> new BookDetailNotFoundException(String.format("No Book with the following id %d is available!", bookID)));
    }

    @Override
    public BookDetails updateBookDetails(long id, BookDetails bookDetails) {
        bookDetailsRepository.findById(id).ifPresent(dbBook -> {
            dbBook.setBookName(dbBook.getBookName());
            dbBook.setAuthor(bookDetails.getAuthor());
            dbBook.setProductInformation(bookDetails.getProductInformation());
        });
        return bookDetails;
    }

    @Override
    public void deleteBookByBookID(Long bookID) {
        bookDetailsRepository.findById(bookID)
                .orElseThrow(() ->  new BookDetailNotFoundException(String.format("No Book with the following id %d available!", bookID)));
        bookDetailsRepository.deleteById(bookID);
    }

    @Override
    public void deleteAllBooks() {
        bookDetailsRepository.deleteAll();
    }

    @Override
    public void createNewBook(BookDetails bookDetails) {
        var book = bookDetailsRepository.findByBookName(bookDetails.getBookName());
        if(book != null && bookDetailsRepository.findById(book.getBookId()).isPresent())
           throw new BookAlreadyExistsException(String.format("The book with the following name: %s and ID: %d already exists.", book.getBookName(), book.getBookId()));
        else if (bookDetails.getBookName().equals("") || bookDetails.getAuthor() == null || bookDetails.getProductInformation() == null) {
            throw new BookObjectsCannotBeNullException("The books title cannot be null and so goes for the other objects as well please check to make sure everything is correct!");
        } else
            bookDetailsRepository.save(bookDetails);
    }
}
