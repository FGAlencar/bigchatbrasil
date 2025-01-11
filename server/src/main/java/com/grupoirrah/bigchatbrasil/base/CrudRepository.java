package com.grupoirrah.bigchatbrasil.base;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.NoRepositoryBean;

import java.io.Serializable;

@NoRepositoryBean
public interface CrudRepository<E extends PersistentEntity<ID>, ID extends Serializable> extends org.springframework.data.repository.CrudRepository<E, ID>, JpaSpecificationExecutor<E> {
}
