package com.snooze.amazonbookdetailssection.controller;

import com.snooze.amazonbookdetailssection.exception.BookDetailNotFoundException;
import com.snooze.amazonbookdetailssection.model.BookDetails;
import com.snooze.amazonbookdetailssection.service.BookDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(path = "api/amazon-book-details/v1")
@AllArgsConstructor
public class BookDetailsController {
    private BookDetailsService bookDetailsService;

    @CrossOrigin(origins = "http://localhost:3000/")
    @GetMapping("/")
    public Iterable<BookDetails> retrieveAllBooks(){
        return bookDetailsService.findAllBooks();
    }
    @GetMapping("/{bookID}")
    public BookDetails findBookByBookID(@PathVariable("bookID") long bookID)throws BookDetailNotFoundException {
        return bookDetailsService.findBookBYTheID(bookID);
    }
    @PostMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public void createNewBook( @RequestBody BookDetails bookDetails){
        bookDetailsService.createNewBook(bookDetails);
    }
    @PutMapping("{id}")
    public BookDetails updateBookDetails(@PathVariable("id") long bookID, @RequestBody  BookDetails bookDetails) {
        return bookDetailsService.updateBookDetails(bookID, bookDetails);
    }

    @DeleteMapping
    public void deleteAll(){
        bookDetailsService.deleteAllBooks();
    }
    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public void deleteBookDetailsByBookID(@PathVariable("id") long bookID){
        bookDetailsService.deleteBookByBookID(bookID);
    }
}
