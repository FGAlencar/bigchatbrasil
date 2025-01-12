package com.grupoirrah.bigchatbrasil.base.restexceptions;

public class HelpRestException {

    public static void throwBadRequest(String message){
        throw new BadRequestException(message);
    }

    public static void throwNotFound(String message){
        throw  new NotFoundException( message);
    }
}
