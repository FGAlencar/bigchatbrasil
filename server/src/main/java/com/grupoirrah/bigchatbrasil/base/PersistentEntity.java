package com.grupoirrah.bigchatbrasil.base;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.jpa.domain.Specification;

import java.io.Serializable;

public interface PersistentEntity <K extends Serializable>{
    K getId();

    @JsonIgnore
    default  boolean isNew(){
        return this.getId() == null;
    }
}
