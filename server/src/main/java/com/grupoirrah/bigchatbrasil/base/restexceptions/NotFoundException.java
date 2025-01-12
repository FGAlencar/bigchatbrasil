package com.grupoirrah.bigchatbrasil.base.restexceptions;

import org.springframework.http.HttpStatus;

public class NotFoundException extends RestCommonException{
    public NotFoundException(String message) {
        super(message, HttpStatus.NOT_FOUND);
    }
}
