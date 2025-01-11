package com.grupoirrah.bigchatbrasil.base;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.io.Serializable;

@NoRepositoryBean
public interface BaseRepository<E extends PersistentEntity<ID>, ID extends Serializable> extends CrudRepository<E, ID>, JpaSpecificationExecutor<E> {
}
