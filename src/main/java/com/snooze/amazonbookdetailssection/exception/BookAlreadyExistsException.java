package com.snooze.amazonbookdetailssection.exception;

public class BookAlreadyExistsException extends RuntimeException {
    public BookAlreadyExistsException(String message){
        super(message);
    }
}
