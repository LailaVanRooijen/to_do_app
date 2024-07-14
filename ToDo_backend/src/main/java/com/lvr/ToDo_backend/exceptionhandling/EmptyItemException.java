package com.lvr.ToDo_backend.exceptionhandling;

public class EmptyItemException extends Exception {
    public EmptyItemException() {
        super();
    }

    public EmptyItemException(String message) {
        super(message);
    }
}
