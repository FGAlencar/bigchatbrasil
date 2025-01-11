package com.grupoirrah.bigchatbrasil.base.restexceptions;

import org.springframework.http.HttpStatusCode;
import org.springframework.web.client.RestClientResponseException;

public class RestCommonException extends RestClientResponseException  {


    public RestCommonException(String message, HttpStatusCode statusCode) {
        super(message, statusCode, message, null, null, null);
    }
}
