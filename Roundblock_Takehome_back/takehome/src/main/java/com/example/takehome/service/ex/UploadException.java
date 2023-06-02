package com.example.takehome.service.ex;

public class UploadException extends ServiceException {

    public UploadException() {
        super("Uploading ZIP file failed.");
    }

    public UploadException(String message) {
        super(message);
    }

    public UploadException(String message, Throwable cause) {
        super(message, cause);
    }

    public UploadException(Throwable cause) {
        super(cause);
    }
}

