package com.grupoirrah.bigchatbrasil.base.restexceptions;

import org.springframework.http.HttpStatus;

public class EntityNotFoundException extends RestCommonException{
    public EntityNotFoundException(String message) {
        super(message, HttpStatus.NOT_FOUND);
    }
}
