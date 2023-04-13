package com.snooze.amazonbookdetailssection.exception;

public class BookDetailNotFoundException extends RuntimeException{
    public BookDetailNotFoundException(String message){
        super(message);
    }
}
